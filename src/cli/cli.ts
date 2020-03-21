import { Options, nextStandardVersion } from '../next-standard-version';
import yargs from 'yargs';

export class Cli {
  public async Run(argv: string[]): Promise<void> {
    const options = this.Parse(argv);

    return nextStandardVersion(options)
      .then((version: string) => {
        console.log(version);
        process.exit(0);
      })
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  }

  private Parse(argv: string[]): Options {
    const args = yargs
      .strict(true)
      .scriptName('next-standard-version')
      .usage('Get the next Standard Version of a project')
      .example('$0', 'Print the next Standard Version')
      .example(
        '$0 --modulePath ./node_modules/standard-version',
        'Print the next Standard Version using the standard-version package specified to by the module path'
      )
      .example(
        '$0 --packaged',
        'Print the next Standard Version using the packaged standard-version'
      )
      .options({
        modulePath: {
          alias: 'm',
          describe: 'Path to standard-version module',
          type: 'string',
          default: './node_modules/standard-version',
          requiresArg: true,
        },
        packaged: {
          alias: 'p',
          describe: 'Use the packaged standard-version',
          type: 'boolean',
        },
        version: {
          alias: 'v',
        },
        help: {
          alias: 'h',
        },
      })
      .parse(argv);

    return args;
  }
}
