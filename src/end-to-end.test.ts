import { Options, nextStandardVersion } from '.';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import semver from 'semver';
import { version } from '../package.json';

describe('nextStandardVersion', (): void => {
  const mocks = {
    console: {
      log: jest.spyOn(console, 'log'),
      error: jest.spyOn(console, 'error'),
    },
  };
  beforeEach((): void => {
    mocks.console.log.mockImplementation(() => {
      return;
    });
    mocks.console.error.mockImplementation(() => {
      return;
    });
  });

  afterEach((): void => {
    mocks.console.log.mockReset();
    mocks.console.error.mockReset();
  });

  describe('Resolves the next version using the packaged standard-version', (): void => {
    it.each([
      ['without options', { packaged: true, releaseAs: undefined }],
      ['with option releaseAs=major', { packaged: true, releaseAs: 'major' }],
      ['with option releaseAs=minor', { packaged: true, releaseAs: 'minor' }],
      ['with option releaseAs=patch', { packaged: true, releaseAs: 'patch' }],
    ])('%s', (name: string, options): Promise<boolean | void> => {
      return nextStandardVersion(options as Options).then(
        (newVersion: string) => {
          if (!options.releaseAs) {
            expect(newVersion).toMatch(
              /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/,
            );
          } else {
            const nextVersion = semver.inc(
              version,
              options.releaseAs as semver.ReleaseType,
            );
            expect(newVersion).toEqual(nextVersion);
          }
        },
      );
    });
  });
});
