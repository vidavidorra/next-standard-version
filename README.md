# Next Standard Version

Get the next [Standard Version](https://github.com/conventional-changelog/standard-version) of a project.

## Table of contents

- [Badges](#badges)
- [Documentation](#documentation)
  - [Install](#install)
  - [CLI](#cli)
  - [API](#api)
- [License](#license)

<a name="badges"></a>

## Badges

| Badge                                                                                                                                                                                                                                          | Description          | Service              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| <a href="https://github.com/prettier/prettier#readme"><img alt="code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>                                                                           | Code style           | Prettier             |
| <a href="https://conventionalcommits.org"><img alt="Conventional Commits: 1.0.0" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square"></a>                                                             | Commit style         | Conventional Commits |
| <a href="https://codecov.io/gh/vidavidorra/next-standard-version"><img alt="Code coverage" src="https://img.shields.io/codecov/c/github/vidavidorra/next-standard-version/master?style=flat-square"></a>                                       | Code coverage        | Codecov              |
| <a href="https://github.com/vidavidorra/next-standard-version/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/next-standard-version/Lint%20commit%20messages?style=flat-square"></a> | Lint commit messages | GitHub Actions       |
| <a href="https://github.com/vidavidorra/next-standard-version/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/next-standard-version/Lint?style=flat-square"></a>                     | Lint                 | GitHub Actions       |
| <a href="https://github.com/vidavidorra/next-standard-version/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/next-standard-version/Build?style=flat-square"></a>                    | Build and test       | GitHub Actions       |
| <a href="https://www.npmjs.com/package/next-standard-version"><img alt="npm version" src="https://img.shields.io/npm/v/next-standard-version.svg?style=flat-square"></a>                                                                       | npm package version  | npm                  |

<a name="documentation"></a>

## Documentation

`next-standard-version` internally uses [Standard Version (`standard-version`)](https://github.com/conventional-changelog/standard-version) to get the next Standard Version. This guarantees that the exact same next Standard Version is returned as Standard Version would be using for the next release.

<a name="install"></a>

### Install

Install `next-standard-version` locally in a project or globally.

```shell
$ npm install --save-dev next-standard-version
# Or install it globally.
$ npm install --global next-standard-version
```

<a name="cli"></a>

### CLI usage

If `next-standard-version` is installed globally, simply run the following command to get the next Standard Version of the project in the working directory.

```shell
$ next-standard-version
1.0.1
```

If `next-standard-version` is installed locally in a project, `npx`, which is available alongside `npm` since [v5.2.0](https://github.com/npm/npm/releases/tag/v5.2.0), can be used to get get the next Standard Version of the project in the working directory.

```shell
$ npx --no-install next-standard-version
1.0.1
```

<a name="api"></a>

### API usage

`next-standard-version` has one function: `nextStandardVersion`. The function returns a promise, which will resolve to a string containing the next Standard Version. The promise will be rejected if there is an error getting the next Standard Version.

<details><summary>Example (click to expand).</summary>
<p>

The example below shows how `next-standard-version` can be used in TypeScript. This example simply prints the next Standard Version to the console.

```typescript
import { nextStandardVersion } from 'next-standard-version';

nextStandardVersion()
  .then((newVersion: string) => {
    console.log(`The new version is: '${newVersion}'`);
  })
  .catch(error => console.error(error));
```

</details>

<a name="license"></a>

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2019 Jeroen de Bruijn

<details><summary>Click to expand the license details.</summary>
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

The full text of the license is available in the _LICENSE.md_ file in this repository and [online](https://www.gnu.org/licenses/gpl.html).

</details>
