# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/vidavidorra/next-standard-version/compare/v2.0.0...v2.0.1) (2020-03-16)

### Bug Fixes

- **deps:** add yargs dependency ([4729896](https://github.com/vidavidorra/next-standard-version/commit/4729896dbbdccab872d9d013676e22af17854334))

## [2.0.0](https://github.com/vidavidorra/next-standard-version/compare/v1.0.2...v2.0.0) (2020-03-09)

### ⚠ BREAKING CHANGES

- **cli:** Default standard-version is an external standard-version in node_modules.

The old behaviour (using the packaged standard-version) can be accomplished by providing the `packaged` option.

### Features

- **cli:** add CLI ([752f017](https://github.com/vidavidorra/next-standard-version/commit/752f017a0af124dad7d2beab0c0f4d56c7663957))
- **cli:** add options to use an external standard-version ([ff29c23](https://github.com/vidavidorra/next-standard-version/commit/ff29c232bf80c2a6de718b3a49687b4f7dccd790))

### Bug Fixes

- **cli:** rename modulesPath option to modulePath ([a017101](https://github.com/vidavidorra/next-standard-version/commit/a0171017a93ff6eb46cd5a873b99ba52f9fbef3b))
- concat promises in nextStandardVersion ([6c4977c](https://github.com/vidavidorra/next-standard-version/commit/6c4977c984bf700dc433ed3df2e67a2827f6b130))

### [1.0.2](https://github.com/vidavidorra/next-standard-version/compare/v1.0.1...v1.0.2) (2020-02-26)

### Bug Fixes

- **deps:** pin dependencies ([#52](https://github.com/vidavidorra/next-standard-version/issues/52)) ([a5a8d0c](https://github.com/vidavidorra/next-standard-version/commit/a5a8d0c2dcfbaf8985e3ad6750e4be5b84d72f59))
- **deps:** update dependency semver to v7.1.3 ([#53](https://github.com/vidavidorra/next-standard-version/issues/53)) ([b33081c](https://github.com/vidavidorra/next-standard-version/commit/b33081c1235a98804df4ebc66f4d15effe0ca3a7))
- **deps:** update dependency standard-version to v7.1.0 ([#54](https://github.com/vidavidorra/next-standard-version/issues/54)) ([26a8459](https://github.com/vidavidorra/next-standard-version/commit/26a8459f6f2c603c4e978c6f140007aedfc2142b))
- remove `git add` from lint-staged ([96378fd](https://github.com/vidavidorra/next-standard-version/commit/96378fd64cab715ff8464a79924be70a17bbfc89))

### [1.0.1](https://github.com/vidavidorra/next-standard-version/compare/v1.0.0...v1.0.1) (2019-12-16)

### Bug Fixes

- **deps:** update dependency semver to v7 ([2a5deca](https://github.com/vidavidorra/next-standard-version/commit/2a5decaa2f8b6d749aceff84b7a6ae6f2d2bbfdb))

## 1.0.0 (2019-12-09)

### Features

- add nextStandardVersion API and CLI ([3a330ca](https://github.com/vidavidorra/next-standard-version/commit/3a330ca80eeacb4cbddde48da6fda885ec3a285c))

### Bug Fixes

- reject without logs if there is an error ([6a3bc95](https://github.com/vidavidorra/next-standard-version/commit/6a3bc95211de8b85630b511f38b8c51e50d1771b))
- remove preset option from API ([f3c7ddc](https://github.com/vidavidorra/next-standard-version/commit/f3c7ddc3a1774c9810d38901592de9658091b564))
- **cli:** log errors on console.error ([8ad336f](https://github.com/vidavidorra/next-standard-version/commit/8ad336f0829978aa2c9017d482ed067dfec9a395))
