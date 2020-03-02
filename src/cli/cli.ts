import { Options, nextStandardVersion } from '../next-standard-version';
import yargs from 'yargs';

export class Cli {
  public async Run(argv: string[]): Promise<void> {
    try {
      const options = await this.Parse(argv);

      nextStandardVersion(options)
        .then((version: string) => {
          console.log(version);
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  private Parse(argv: string[]): Options {
    const args = yargs
      .strict(true)
      .scriptName('next-standard-version')
      .usage('Get the next Standard Version of a project')
      .example('$0', 'Print the next standard version')
      .options({
        modulesPath: {
          alias: 'm',
          describe: 'Path to node_modules path of standard-version',
          type: 'string',
          default: './node_modules/standard-version',
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
