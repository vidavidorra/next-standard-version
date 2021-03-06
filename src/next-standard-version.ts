import path from 'path';
import semver from 'semver';
import stripAnsi from 'strip-ansi';

/**
 * One of the `modulePath` and `packaged` options must be configured. If both
 * are configured, the `packaged` option will silently overrule the `modulePath`
 * option.
 */
export interface Options {
  modulePath?: string; // Path to standard-version module.
  packaged?: boolean; // Use the packaged standard-version/
  releaseAs?: 'major' | 'minor' | 'patch'; // Specify the release type manually.
}

export function nextStandardVersion(options: Options): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!options.modulePath && !options.packaged) {
      reject(
        "One of the 'modulePath' and 'packaged' options must be configured",
      );
    }

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
