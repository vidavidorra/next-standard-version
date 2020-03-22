import path from 'path';
import semver from 'semver';
import stripAnsi from 'strip-ansi';

export interface Options {
  modulePath: string;
  packaged?: boolean;
  releaseAs?: 'major' | 'minor' | 'patch';
}

export function nextStandardVersion(options: Options): Promise<string> {
  return new Promise((resolve, reject) => {
    const logs: string[] = [];
    console.info = function (message: string): void {
      logs.push(stripAnsi(message));
    };

    let standardVersionPackage = 'standard-version';

    if (!options.packaged) {
      standardVersionPackage = path.resolve(options.modulePath);
    }

    import(standardVersionPackage)
      .then((standardVersion) => {
        return standardVersion.default({
          dryRun: true,
          silent: false,
          skip: {
            changelog: true,
            commit: true,
            tag: true,
          },
          releaseAs: options.releaseAs,
        });
      })
      .then(() => {
        const nextVersionPattern = /bumping version in .* from .* to (.*)/;
        let nextVersion: string;

        logs.some((line: string): boolean => {
          const match = nextVersionPattern.exec(line);
          if (match !== null && match.length == 2 && semver.valid(match[1])) {
            nextVersion = match[1];

            resolve(nextVersion);
            return true;
          }

          return false;
        });

        if (!nextVersion) {
          reject('Could not get a valid next version from standard-version');
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
