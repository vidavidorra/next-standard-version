import { nextStandardVersion } from '../next-standard-version';
import yargs from 'yargs';

export class Cli {
  public async Run(argv: string[]): Promise<void> {
    try {
      this.Parse(argv);

      nextStandardVersion()
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

  private Parse(argv: string[]): void {
    yargs
      .strict(true)
      .scriptName('next-standard-version')
      .usage('Get the next Standard Version of a project')
      .example('$0', 'Print the next standard version')
      .options({
        version: {
          alias: 'v',
        },
        help: {
          alias: 'h',
        },
      })
      .parse(argv);
  }
}
