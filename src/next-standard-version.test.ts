import { nextStandardVersion } from '.';
import standardVersion from 'standard-version';

jest.mock('standard-version');

interface Mock {
  standardVersion;
}

function createStandardVersionMock(
  mock: Mock,
  value: string,
  method: 'resolve' | 'reject' | 'throw' = 'resolve'
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
      }
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
    ['the packaged', { modulesPath: '', packaged: true }],
    [
      'an external',
      { modulesPath: 'node_modules/standard-version', packaged: false },
    ],
  ])('With %s standard-version', (name, options) => {
    test("Rejects if it couldn't find a version in the standard-version output", (): Promise<
      boolean | void
    > => {
      createStandardVersionMock(
        mock,
        'bumping version in some-file.json from 0.1.0 to xxx'
      );

      return expect(nextStandardVersion(options)).rejects.toEqual(
        'Could not get a valid next version from standard-version'
      );
    });

    test('Rejects if standard-version rejects', (): Promise<boolean | void> => {
      const errorMessage = 'some standard-version reject error message';
      createStandardVersionMock(mock, errorMessage, 'reject');

      return expect(nextStandardVersion(options)).rejects.toEqual(
        new Error(errorMessage)
      );
    });

    test('Rejects if standard-version throws', (): Promise<boolean | void> => {
      const errorMessage = 'some standard-version throw error messssage';
      createStandardVersionMock(mock, errorMessage, 'throw');

      return expect(nextStandardVersion(options)).rejects.toThrow(errorMessage);
    });

    test('Resolves the next version from the standard-version', (): Promise<
      boolean | void
    > => {
      createStandardVersionMock(
        mock,
        'bumping version in some-file.json from 0.1.0 to 99.99.99'
      );

      return nextStandardVersion(options).then((newVersion: string) => {
        expect(newVersion).toEqual('99.99.99');
        expect(mock.standardVersion).toHaveBeenCalledTimes(1);
      });
    });
  });

  // test("Rejects if it couldn't find a version in the standard-version output", (): Promise<
  //   boolean | void
  // > => {
  //   createStandardVersionMock(
  //     mock,
  //     'bumping version in some-file.json from 0.1.0 to xxx'
  //   );

  //   return expect(nextStandardVersion(options)).rejects.toEqual(
  //     'Could not get a valid next version from standard-version'
  //   );
  // });

  // test('Rejects if standard-version rejects', (): Promise<boolean | void> => {
  //   const errorMessage = 'some standard-version reject error message';
  //   createStandardVersionMock(mock, errorMessage, 'reject');

  //   return expect(nextStandardVersion(options)).rejects.toEqual(
  //     new Error(errorMessage)
  //   );
  // });

  // test('Rejects if standard-version throws', (): Promise<boolean | void> => {
  //   const errorMessage = 'some standard-version throw error messssage';
  //   createStandardVersionMock(mock, errorMessage, 'throw');

  //   return expect(nextStandardVersion(options)).rejects.toThrow(errorMessage);
  // });

  // describe('Resolves the next version from the standard-version', (): void => {
  //   test('From packaged standard-version', (): Promise<boolean | void> => {
  //     createStandardVersionMock(
  //       mock,
  //       'bumping version in some-file.json from 0.1.0 to 99.99.99'
  //     );

  //     return nextStandardVersion(options).then((newVersion: string) => {
  //       expect(newVersion).toEqual('99.99.99');
  //       expect(mock.standardVersion).toHaveBeenCalledTimes(1);
  //     });
  //   });

  //   test('From external standard-version', (): Promise<boolean | void> => {
  //     /**
  //      * Can't mock an external module that doesn't exist, so point this to the
  //      * packaged standard-version. This test is still valid as it uses the same
  //      * mechanism to use the 'external' standard-version package.
  //      */
  //     options.modulesPath = 'node_modules/standard-version';
  //     options.packaged = undefined;

  //     createStandardVersionMock(
  //       mock,
  //       'bumping version in some-file.json from 0.1.0 to 99.99.99'
  //     );

  //     return nextStandardVersion(options).then((newVersion: string) => {
  //       expect(newVersion).toEqual('99.99.99');
  //       expect(mock.standardVersion).toHaveBeenCalledTimes(1);
  //     });
  //   });
  // });
});
