# Changelog

### [2.1.3](https://github.com/vidavidorra/next-standard-version/compare/v2.1.2...v2.1.3) (2020-05-07)

### Bug Fixes

- **deps:** update dependency standard-version to v8 ([#130](https://github.com/vidavidorra/next-standard-version/issues/130)) ([3f366c8](https://github.com/vidavidorra/next-standard-version/commit/3f366c8df15ed18cea4d6ed810885b7e78d592d7))

### [2.1.2](https://github.com/vidavidorra/next-standard-version/compare/v2.1.1...v2.1.2) (2020-04-15)

### Bug Fixes

- **deps:** update dependency semver to v7.3.2 ([#103](https://github.com/vidavidorra/next-standard-version/issues/103)) ([74658f4](https://github.com/vidavidorra/next-standard-version/commit/74658f409cf7c7bf185af06157d74287c389459d))

### [2.1.1](https://github.com/vidavidorra/next-standard-version/compare/v2.1.0...v2.1.1) (2020-04-14)

### Bug Fixes

- **deps:** update dependency semver to v7.2.1 ([#94](https://github.com/vidavidorra/next-standard-version/issues/94)) ([4d030e5](https://github.com/vidavidorra/next-standard-version/commit/4d030e5a66be453612d295bec21e489fcde22932))
- **deps:** update dependency semver to v7.2.2 ([#99](https://github.com/vidavidorra/next-standard-version/issues/99)) ([68e3c67](https://github.com/vidavidorra/next-standard-version/commit/68e3c676740bf0e60554cea4fe0a11330011fb54))
- **deps:** update dependency semver to v7.3.0 ([#102](https://github.com/vidavidorra/next-standard-version/issues/102)) ([ab905a9](https://github.com/vidavidorra/next-standard-version/commit/ab905a9d05eaa81a61f38d7958a98235e574c5bf))

## [2.1.0](https://github.com/vidavidorra/next-standard-version/compare/v2.0.2...v2.1.0) (2020-03-22)

### Features

- add releaseAs option specify the release type manually ([737833c](https://github.com/vidavidorra/next-standard-version/commit/737833cdd906471292eb83f922e68020dbd53a52))

### Bug Fixes

- make modulePath option optional ([fbb7f97](https://github.com/vidavidorra/next-standard-version/commit/fbb7f97ef6a5902f3cfc7597414ca430af6e44ff))
- **cli:** add note about option packaged overruling modulePath ([e60c419](https://github.com/vidavidorra/next-standard-version/commit/e60c419d1d23a88dcd37ece59df9f6cfa1f7a257))

### [2.0.2](https://github.com/vidavidorra/next-standard-version/compare/v2.0.1...v2.0.2) (2020-03-21)

### Bug Fixes

- **cli:** require argument on the modulePath option ([ba4e60a](https://github.com/vidavidorra/next-standard-version/commit/ba4e60aa8ac8ca9dc96ef6f514ed773693d96ee9))

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
