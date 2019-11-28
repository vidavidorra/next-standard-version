import semver from 'semver';
import standardVersion from 'standard-version';
import stripAnsi from 'strip-ansi';

const logs: string[] = [];
console.info = function(message: string): void {
  logs.push(stripAnsi(message));
};

export function nextStandardVersion(
  preset: 'angular' | 'conventionalcommits' = 'conventionalcommits'
): Promise<string> {
  return new Promise((resolve, reject) => {
    standardVersion({
      dryRun: true,
      silent: false,
      skip: {
        changelog: true,
        commit: true,
        tag: true,
      },
      preset,
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
          console.error(
            'Could not get a valid next version from standard-version'
          );
        }
      })
      .catch(error => {
        console.error(`standard-version failed with message: ${error.message}`);
        reject(error);
      });
  });
}
