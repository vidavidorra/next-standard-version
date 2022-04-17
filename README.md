# Next Standard Version

Get the next [Standard Version](https://github.com/conventional-changelog/standard-version) of a project.

---

[![npm version](https://img.shields.io/npm/v/next-standard-version?logo=npm&style=flat-square)](https://www.npmjs.com/package/next-standard-version)
[![npm downloads](https://img.shields.io/npm/dm/next-standard-version?logo=npm&style=flat-square)](https://www.npmjs.com/package/next-standard-version)
[![Node.js version support](https://img.shields.io/node/v/next-standard-version?logo=node.js&style=flat-square)](https://nodejs.org/en/about/releases/)
[![Renovate enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=renovatebot&logoColor&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Code coverage](https://img.shields.io/codecov/c/github/vidavidorra/next-standard-version?logo=codecov&style=flat-square)](https://codecov.io/gh/vidavidorra/next-standard-version)
[![License](https://img.shields.io/github/license/vidavidorra/next-standard-version?style=flat-square)](LICENSE.md)

<a name="toc"></a>

## Table of contents

- [Install](#install)
- [Usage](#usage)
  - [CLI](#cli)
  - [API](#api)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Install

Install `next-standard-version` locally in a project or globally.

```shell
$ npm install --save-dev next-standard-version
# Or install it globally.
$ npm install --global next-standard-version
```

## Usage

`next-standard-version` has two methods of using [Standard Version (`standard-version`)](https://github.com/conventional-changelog/standard-version) to get the next version.

1. Using the standard-version of the project to get the next Standard Version from (default; see [CLI](#cli)).
2. Using the packaged standard-version.

While this project aims to always have the latest version of standard-version, the first option guarantees that the standard-version used to get the next version is the exact same as the standard-version used to make the actual release. Using the second option, there might be a mismatch between the versions of standard-version and is could result in a different release version in case of a difference in the major version of standard-version.

### CLI

```shell
$ next-standard-version --help
Get the next Standard Version of a project.

Options:
  --help, -h                                                           [boolean]
  --version, -v                                                        [boolean]
  --modulePath, -m  Path to standard-version module.
                           [string] [default: "./node_modules/standard-version"]
  --packaged, -p    Use the packaged standard-version.
                    Note that this silently overrules the modulePath option.
                                                                       [boolean]
  --releaseAs, -r   Specify the release type manually.
                                   [string] [choices: "major", "minor", "patch"]

Examples:
  next-standard-version                     Print the next Standard Version.
  next-standard-version --modulePath        Print the next Standard Version
  ./node_modules/standard-version           using the standard-version package
                                            specified to by the module path.
  next-standard-version --packaged          Print the next Standard Version
                                            using the packaged standard-version.
  next-standard-version --releaseAs minor   Print the next Standard Version with
                                            a specific release type.
```

<details>
<summary>Examples using different installation and execution methods.</summary>
<p>

- Run from global installation.

  ```shell
  $ next-standard-version  # From project root
  1.0.1
  ```

- Run from local installation.

  ```shell
  $ npx --no-install next-standard-version  # From project root
  1.0.1
  ```

- Run from local installation as npm script with the following in `package.json`.

  ```json
  {
    "scripts": {
      "next-version": "next-standard-version"
    }
  }
  ```

  And run.

  ```shell
  $ npm run next-version  # From project root
  1.0.1
  ```

</details>

### API

`next-standard-version` has one function: `nextStandardVersion`.

The function takes an object of the `Options` interface, shown below, as argument. One of the `modulePath` and `packaged` options MUST be configured. If both are configured, the `packaged` option will silently overrule the `modulePath` option.

```typescript
export interface Options {
  modulePath?: string; // Path to standard-version module.
  packaged?: boolean;  // Use the packaged standard-version.
  releaseAs?: 'major' | 'minor' | 'patch'; // Specify the release type manually.
}
```

The function returns a promise, which will resolve to a string containing the next Standard Version. The promise will be rejected with an error message if an error occurs.

<details><summary>Example.</summary>
<p>

The example below shows how `next-standard-version` can be used in TypeScript. This example simply prints the next Standard Version to the console.

```typescript
import { nextStandardVersion } from 'next-standard-version';

nextStandardVersion({
  modulePath: './node_modules/standard-version',
})
  .then((version: string) => {
    console.log(version);
  })
  .catch((error) => {
    console.error(error);
  });
```

</details>

## Contributing

Please [create an issue](https://github.com/vidavidorra/next-standard-version/issues/new/choose) if you have a bug report, feature proposal or question that does not yet exist.

Please give this project a star ⭐ if you like it and consider becoming a [sponsor](https://github.com/sponsors/jdbruijn) to support this project.

Refer to the [contributing guide](https://github.com/vidavidorra/.github/blob/main/CONTRIBUTING.md) detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow?style=flat-square)](https://conventionalcommits.org)
[![Code style](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)
[![Linting](https://img.shields.io/badge/linting-ESLint-lightgrey?logo=eslint&style=flat-square)](https://eslint.org)
[![Lint commit messages](https://img.shields.io/github/workflow/status/vidavidorra/next-standard-version/Lint%20commit%20messages?logo=github&label=Lint%20commit%20messages&style=flat-square)](https://github.com/vidavidorra/next-standard-version/actions)
[![Build](https://img.shields.io/github/workflow/status/vidavidorra/next-standard-version/Build?logo=github&label=Build&style=flat-square)](https://github.com/vidavidorra/next-standard-version/actions)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/next-standard-version/security/) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2019-2022 Jeroen de Bruijn

<details><summary>License details.</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html).

</details>
