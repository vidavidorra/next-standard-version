import { nextStandardVersion } from '.';
import standardVersion from 'standard-version';

jest.mock('standard-version');

interface Mock {
  standardVersion;
}

function createStandardVersionMock(
  mock: Mock,
  value: string,
  method: 'resolve' | 'reject' | 'throw' = 'resolve',
): void {
  const standardVersionObj = { standardVersion };

  mock.standardVersion = jest
    .spyOn(standardVersionObj, 'standardVersion')
    .mockImplementation(
      (): Promise<void> => {
        switch (method) {
          case 'resolve':
            console.info(value);
            return Promise.resolve();
            break;
          case 'reject':
            return Promise.reject(new Error(value));
            break;
          case 'throw':
            throw new Error(value);
            break;
          default:
            break;
        }

        return Promise.resolve();
      },
    );
}

describe('nextStandardVersion', (): void => {
  const mock: Mock = { standardVersion: null };

  beforeEach((): void => {
    mock.standardVersion = null;
  });

  afterEach((): void => {
    mock.standardVersion.mockRestore();
  });

  describe.each([
    ['the packaged', { modulePath: '', packaged: true }],
    [
      'an external',
      { modulePath: 'node_modules/standard-version', packaged: false },
    ],
  ])('With %s standard-version', (name, options) => {
    describe('Rejects if', (): void => {
      test("Both 'modulePath' and 'packaged' are not configured", (): Promise<
        boolean | void
      > => {
        createStandardVersionMock(mock, '');

        return expect(nextStandardVersion({})).rejects.toEqual(
          "One of the 'modulePath' and 'packaged' options must be configured",
        );
      });
      test("It couldn't find a version in the standard-version output", (): Promise<
        boolean | void
      > => {
        createStandardVersionMock(
          mock,
          'bumping version in some-file.json from x.x.x to x.x.x',
        );

        return expect(nextStandardVersion(options)).rejects.toEqual(
          'Could not get a valid next version from standard-version',
        );
      });

      test('standard-version rejects', (): Promise<boolean | void> => {
        const errorMessage = 'some standard-version reject error message';
        createStandardVersionMock(mock, errorMessage, 'reject');

        return expect(nextStandardVersion(options)).rejects.toEqual(
          new Error(errorMessage),
        );
      });

      test('standard-version throws', (): Promise<boolean | void> => {
        const errorMessage = 'some standard-version throw error message';
        createStandardVersionMock(mock, errorMessage, 'throw');

        return expect(nextStandardVersion(options)).rejects.toThrow(
          errorMessage,
        );
      });
    });

    test('Resolves the next version from standard-version', (): Promise<
      boolean | void
    > => {
      createStandardVersionMock(
        mock,
        'bumping version in some-file.json from 0.1.0 to 99.99.99',
      );

      return nextStandardVersion(options).then((newVersion: string) => {
        expect(newVersion).toEqual('99.99.99');
        expect(mock.standardVersion).toHaveBeenCalledTimes(1);
      });
    });
  });
});
