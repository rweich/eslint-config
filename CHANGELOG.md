# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.0](https://github.com/rweich/eslint-config/compare/v3.0.0...v4.0.0) (2023-10-07)


### ⚠ BREAKING CHANGES

* node versions < v18.17 are not longer supported, as
they're end-of-life

### Features

* set unicorn/switch-case-braces to 'avoid' ([3111516](https://github.com/rweich/eslint-config/commit/3111516f770e310a34075e7f5e18240196daab00))


### Miscellaneous Chores

* **deps:** bump actions/checkout from 3.5.3 to 3.6.0 ([3496579](https://github.com/rweich/eslint-config/commit/34965795fda5c523b1aaa378f635e0cc23356b8d))
* **deps:** bump actions/checkout from 3.6.0 to 4.0.0 ([aa61d6e](https://github.com/rweich/eslint-config/commit/aa61d6ebce2da78d756714a49ae2a6429716afa3))
* **deps:** bump actions/checkout from 4.0.0 to 4.1.0 ([90ee972](https://github.com/rweich/eslint-config/commit/90ee9729c21dd6e33f0e3a7ab8cd053b7c7a2716))
* **deps:** bump cycjimmy/semantic-release-action from 3.4.2 to 4.0.0 ([f1752b9](https://github.com/rweich/eslint-config/commit/f1752b962acf939c67707988b4c96e97b8b6358f))
* **deps:** bump step-security/harden-runner from 2.0.0 to 2.5.1 ([7ce6a84](https://github.com/rweich/eslint-config/commit/7ce6a848c5d26a18a9ad11cab1c3b97acba632c7))
* drop support for node <18.17 ([28607d0](https://github.com/rweich/eslint-config/commit/28607d0120aeab033d63a3ed6c351d446fe08a49))
* update dependencies (major) ([1ec9478](https://github.com/rweich/eslint-config/commit/1ec9478d722213c70126adf7ce20456dd8367c59))
* update github actions ([5ddde7c](https://github.com/rweich/eslint-config/commit/5ddde7c886ec02745f44878e1ec76d1cf1932e89))

## [3.0.0](https://github.com/rweich/eslint-config/compare/v2.0.11...v3.0.0) (2023-08-27)


### ⚠ BREAKING CHANGES

* no more node14
* will probably break as long prettier is not updated as
well

### Features

* update major dependencies ([197ef44](https://github.com/rweich/eslint-config/commit/197ef4441c58c2f84b826dabe9c24d50ba214922))


### Miscellaneous Chores

* drop support for node 14 ([7e187f4](https://github.com/rweich/eslint-config/commit/7e187f4a82c6f20e6ff0abce81413d13549c893e))

## [2.0.11](https://github.com/rweich/eslint-config/compare/v2.0.10...v2.0.11) (2023-07-29)


### Miscellaneous Chores

* **deps:** bump http-cache-semantics from 4.1.0 to 4.1.1 ([c1b458f](https://github.com/rweich/eslint-config/commit/c1b458ff967041ccf3d41f5fe3712b43ab5814f9))
* **deps:** bump json5 from 1.0.1 to 1.0.2 ([eb13372](https://github.com/rweich/eslint-config/commit/eb13372addee6bdc8e1f512dd7088389b69b2401))
* **deps:** bump semver from 5.7.1 to 5.7.2 ([377c016](https://github.com/rweich/eslint-config/commit/377c016b8e248baf7ef2f869726e8147e6886e13))
* **deps:** bump word-wrap from 1.2.3 to 1.2.4 ([3c1d66d](https://github.com/rweich/eslint-config/commit/3c1d66d330250a455e3b568d9729d269013ce94c))

## [2.0.10](https://github.com/rweich/eslint-config/compare/v2.0.9...v2.0.10) (2022-11-30)


### Bug Fixes

* member-ordering configuration ([9a0ea13](https://github.com/rweich/eslint-config/commit/9a0ea13be7cf424c66cfa65fa5b8ff61cf8d186d))

## [2.0.9](https://github.com/rweich/eslint-config/compare/v2.0.8...v2.0.9) (2022-11-29)


### Bug Fixes

* change harden runner config for release workflow ([0aa399d](https://github.com/rweich/eslint-config/commit/0aa399dc027249884464a2b31c0526d333b5b225))

## [2.0.8](https://github.com/rweich/eslint-config/compare/v2.0.7...v2.0.8) (2022-11-29)


### Bug Fixes

* add yarn registry to allowed endpoints ([384373b](https://github.com/rweich/eslint-config/commit/384373b483411584b867feb15498849e8bcce3b6))
* release workflow ([a4ff415](https://github.com/rweich/eslint-config/commit/a4ff415627b0734d9e7c1c2de96e8bf4d3854f89))

## [2.0.7](https://github.com/rweich/eslint-config/compare/v2.0.6...v2.0.7) (2022-11-27)


### Bug Fixes

* allow endpoint for commitlint workflow ([ebf72a2](https://github.com/rweich/eslint-config/commit/ebf72a26b6ae2d467e89b4cece1ee60f05790e3c))
* workflows not appearing in the status-checks dropdown ([ce667f1](https://github.com/rweich/eslint-config/commit/ce667f1ee88f03804e14282ade3388326c000efb))

## [2.0.6](https://github.com/rweich/eslint-config/compare/v2.0.5...v2.0.6) (2022-11-27)


### Miscellaneous Chores

* update dependencies (major) ([067db95](https://github.com/rweich/eslint-config/commit/067db953e09b9edd5f9fb504042720d35dbe4547))
* update release workflow ([a9c26b3](https://github.com/rweich/eslint-config/commit/a9c26b3d68edd9393b77f47f7d76cbe3c310c4d1))

### [2.0.5](https://github.com/rweich/eslint-config/compare/v2.0.4...v2.0.5) (2022-11-13)


### Miscellaneous Chores

* **deps:** bump minimatch from 3.0.4 to 3.1.2 ([b8ae339](https://github.com/rweich/eslint-config/commit/b8ae339cec47e077ec901ef3ad43b9d3bc025945))

### [2.0.4](https://github.com/rweich/eslint-config/compare/v2.0.3...v2.0.4) (2022-06-10)


### Miscellaneous Chores

* **deps-dev:** bump semantic-release from 19.0.2 to 19.0.3 ([f066906](https://github.com/rweich/eslint-config/commit/f066906180b7679bf9cc64ad0a837926f7561bc6))

### [2.0.3](https://github.com/rweich/eslint-config/compare/v2.0.2...v2.0.3) (2022-06-04)


### Miscellaneous Chores

* **deps:** bump npm from 8.3.1 to 8.12.0 ([5c0ebc9](https://github.com/rweich/eslint-config/commit/5c0ebc9e965f6325bfbbf57c8ab93cee1ff0863d))
* **deps:** bump semver-regex from 3.1.3 to 3.1.4 ([d189d5f](https://github.com/rweich/eslint-config/commit/d189d5f41f86d5fdd32511150c32f81e6b5e3721))

### [2.0.2](https://github.com/rweich/eslint-config/compare/v2.0.1...v2.0.2) (2022-03-30)


### Miscellaneous Chores

* **deps:** bump minimist from 1.2.5 to 1.2.6 ([a6b2fda](https://github.com/rweich/eslint-config/commit/a6b2fdaceb969c6be92d2b76f08708cd691288c7))

### [2.0.1](https://github.com/rweich/eslint-config/compare/v2.0.0...v2.0.1) (2022-01-20)


### Miscellaneous Chores

* update dependencies (major) ([669c57e](https://github.com/rweich/eslint-config/commit/669c57eef615e41fcb3b10b6cc091ddece805617))

## [2.0.0](https://github.com/rweich/eslint-config/compare/v1.1.4...v2.0.0) (2022-01-04)


### ⚠ BREAKING CHANGES

* no more node v15 as its no lts, outdated and breaking
my builds
* the minimum required version of node is now v14.17

### Features

* add import-sort plugin ([75f6d3e](https://github.com/rweich/eslint-config/commit/75f6d3eb38f6db412950a4f613d6f4291cf928a3))


### Miscellaneous Chores

* add missing @types/node package ([335e934](https://github.com/rweich/eslint-config/commit/335e93401c2415a6f932d9c4378db6c0eb6d5ff8))
* drop support of node15 ([07772ad](https://github.com/rweich/eslint-config/commit/07772ad11a0633e119fa73ba5a50fc91aa5c9ecb))
* update all dependencies (major) ([b440971](https://github.com/rweich/eslint-config/commit/b440971397b8ec492df763456ca35864581faeb2))
* update dependencies ([bbb821e](https://github.com/rweich/eslint-config/commit/bbb821ea2e4e7d3611d0de470da53c48d9f84f80))
* update unicorn and eslint-types ([4f7be57](https://github.com/rweich/eslint-config/commit/4f7be574ae509a9c8f895823342f882076407ba4))

### [1.1.4](https://github.com/rweich/eslint-config/compare/v1.1.3...v1.1.4) (2021-09-15)


### Miscellaneous Chores

* update dependencies ([34f65b8](https://github.com/rweich/eslint-config/commit/34f65b8d52c57bb85361549f4d80c43b8b4062ae))

### [1.1.3](https://github.com/rweich/eslint-config/compare/v1.1.2...v1.1.3) (2021-09-01)


### Miscellaneous Chores

* update dependencies ([e0edb43](https://github.com/rweich/eslint-config/commit/e0edb43a1847201cf815db11e4c4088e6c36821e))
* **deps:** bump tar from 6.1.5 to 6.1.11 ([733f491](https://github.com/rweich/eslint-config/commit/733f491324c9286140d8e7d665ddb5562ea9a0de))

### [1.1.2](https://github.com/rweich/eslint-config/compare/v1.1.1...v1.1.2) (2021-08-05)


### Miscellaneous Chores

* **deps:** bump tar from 6.1.0 to 6.1.5 ([#5](https://github.com/rweich/eslint-config/issues/5)) ([5559c7e](https://github.com/rweich/eslint-config/commit/5559c7e5d128a252eaf4628efcd16035c8a4ba60))

### [1.1.1](https://github.com/rweich/eslint-config/compare/v1.1.0...v1.1.1) (2021-06-12)


### Bug Fixes

* replace tap-spec with tap-spec-emoji ([#3](https://github.com/rweich/eslint-config/issues/3)) ([48ff816](https://github.com/rweich/eslint-config/commit/48ff816251f4dee45ad252e07111cf9628bb778c))


### Miscellaneous Chores

* update dependencies ([#4](https://github.com/rweich/eslint-config/issues/4)) ([493dd44](https://github.com/rweich/eslint-config/commit/493dd444023c07c55c90c5930a59df636173ac07))

# [1.1.0](https://github.com/rweich/eslint-config/compare/v1.0.3...v1.1.0) (2021-05-08)


### Features

* add resolver for typescript ([e9c4d7d](https://github.com/rweich/eslint-config/commit/e9c4d7dcdb47584bbd331fec68843d6ece7ed0e6))

## [1.0.3](https://github.com/rweich/eslint-config/compare/v1.0.2...v1.0.3) (2021-05-02)


### Bug Fixes

* exclude config files from pascalcase rule ([1a7587c](https://github.com/rweich/eslint-config/commit/1a7587cf907d5f6f66b36640809ba1b32b3d8654))

## [1.0.2](https://github.com/rweich/eslint-config/compare/v1.0.1...v1.0.2) (2021-04-27)


### Bug Fixes

* disable array style rules ([f121d89](https://github.com/rweich/eslint-config/commit/f121d89c4113938ca1129b86c45fa3282203a0d3))
* dont run githooks on CI ([b28239a](https://github.com/rweich/eslint-config/commit/b28239a48c74db10933dcd64c0c01a5f710df951))
* the git hooks are now executable ([3f2d13d](https://github.com/rweich/eslint-config/commit/3f2d13df7ad253a96d840dc724d1cc02a466a4ba))

## [1.0.1](https://github.com/rweich/eslint-config/compare/v1.0.0...v1.0.1) (2021-04-24)


### Bug Fixes

* dependency error ([ad52d55](https://github.com/rweich/eslint-config/commit/ad52d55f55ee09018a283a3575fd3ccda7abae67))

# 1.0.0 (2021-04-02)


### Features

* created eslint config ([7c955fa](https://github.com/rweich/eslint-config/commit/7c955fa9b792b6828cae7e09c8924b846f504da2))
