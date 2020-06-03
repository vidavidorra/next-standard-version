import { Cli } from '.';
import { mocked } from 'ts-jest/utils';
import { nextStandardVersion } from '../next-standard-version';

jest.mock('../next-standard-version');

describe('Cli', (): void => {
  const mocks = {
    console: {
      log: jest.spyOn(console, 'log'),
      error: jest.spyOn(console, 'error'),
    },
    exit: jest.spyOn(process, 'exit'),
    nextStandardVersion: mocked(nextStandardVersion),
  };
  const logs = {
    log: [],
    error: [],
  };

  beforeEach((): void => {
    mocks.nextStandardVersion.mockImplementation(
      (): Promise<string> => {
        return Promise.resolve('1.0.0');
      },
    );

    mocks.console.log.mockImplementation((msg: string): void => {
      logs.log.push(msg);
    });
    mocks.console.error.mockImplementation((msg: string): void => {
      logs.error.push(msg);
    });

    /**
     * Ignore the following line because the mock implementation for
     * `process.exit` does not comply with the standard exit type of
     * `(code?: number) => never`. That is fine in this case since the program
     * shouldn't actually exit but just let the tests detect that it would have.
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: TS2534: A function returning 'never' cannot have a reachable
    // end point.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    mocks.exit.mockImplementation(() => {});
  });

  afterEach((): void => {
    logs.log = [];
    logs.error = [];
    mocks.console.log.mockReset();
    mocks.console.error.mockReset();
    mocks.exit.mockReset();
    mocks.nextStandardVersion.mockReset();
  });

  describe('Exits with error code and message', (): void => {
    test('If nextStandardVersion rejects', (): Promise<void> => {
      const errorMessage = 'some reject error message';
      mocks.nextStandardVersion.mockImplementation(
        (): Promise<string> => {
          return Promise.reject(errorMessage);
        },
      );

      const cli = new Cli();
      return cli.Run([]).then(() => {
        expect(mocks.console.error).toHaveBeenCalled();
        expect(mocks.exit).toHaveBeenCalledWith(1);
      });
    });
  });

  describe('Exits with success code (and message)', (): void => {
    test.each(['--help', '-h', '--version', '-v'])(
      'If only the `%s` option is given',
      (option): Promise<void> => {
        const cli = new Cli();

        return cli.Run([option]).then(() => {
          expect(mocks.console.error).not.toHaveBeenCalled();
          expect(mocks.exit).toHaveBeenCalledWith(0);
        });
      },
    );

    test('Without options', (): Promise<void> => {
      const cli = new Cli();

      return cli.Run([]).then(() => {
        expect(mocks.nextStandardVersion).toHaveBeenCalledTimes(1);
        expect(mocks.console.log).toHaveBeenCalled();
        expect(logs.log).not.toBe([]);
        expect(mocks.console.error).not.toHaveBeenCalled();
        expect(mocks.exit).toHaveBeenCalledWith(0);
      });
    });

    /**
     * Each option is tested extensively, but aliases should be tested only
     * once. The reasoning for this is that the alias just refers to the full
     * option, so seeing that the alias works is enough as test.
     */
    test.each([
      ['--modulePath', 'node_modules/standard-version'],
      ['-m', 'node_modules/standard-version'],
      ['--packaged', 'true'],
      ['-p', 'true'],
      ['--releaseAs', 'major'],
      ['--releaseAs', 'minor'],
      ['--releaseAs', 'patch'],
      ['-r', 'major'],
    ])(
      'If the `%s` option is given',
      (option, value): Promise<void> => {
        const cli = new Cli();

        return cli.Run([option, value]).then(() => {
          expect(mocks.nextStandardVersion).toHaveBeenCalledTimes(1);
          expect(mocks.console.log).toHaveBeenCalled();
          expect(logs.log).not.toBe([]);
          expect(mocks.console.error).not.toHaveBeenCalled();
          expect(mocks.exit).toHaveBeenCalledWith(0);
        });
      },
    );
  });
});
