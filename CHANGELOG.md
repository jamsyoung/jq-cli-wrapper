# JQ CLI Wrapper Changelog

## 2018-04-20, Version 1.0.2, @jamsyoung

### Notable changes

* Fixes process.arch install issue on linux

### Commits

* [[`76e7ac92ab`](https://github.com/jamsyoung/jq-cli-wrapper/commit/76e7ac92ab)] - process.arch is
  not a function error on linux (#12) (jamie young)
  [#12](https://github.com/jamsyoung/jq-cli-wrapper/pull/12)

---

## 2018-04-19, Version 1.0.1, @jamsyoung

### Notable changes

* Fixes chmod install issue

### Commits

* [[`089e4c57c8`](https://github.com/jamsyoung/jq-cli-wrapper/commit/089e4c57c8)] - Fix chmod
  install error (#10) (jamie young) [#10](https://github.com/jamsyoung/jq-cli-wrapper/pull/10)

---

## 2018-04-19, Version 1.0.0, @jamsyoung

### Notable changes

* Uses bin-wrapper to get the proper binary. No change in jq version. It's 1.5 btw.

### Commits

* [[`528c753b40`](https://github.com/jamsyoung/jq-cli-wrapper/commit/528c753b40)] - use
  bin-wrapper(#8) (jamie young) [#8](https://github.com/jamsyoung/jq-cli-wrapper/pull/8)

---

## 2016-11-16, Version 0.4.0, @jamsyoung

### Notable changes

* Does not pin node engine anymore, updated to require 6.9.1+ (current LTS)

### Known issues

See https://github.com/jamsyoung/jq-cli-wrapper/labels/defect for complete and current list of known
issues.

### Commits

* [[`019bc3c047`](https://github.com/jamsyoung/jq-cli-wrapper/commit/019bc3c047)] - **deps**: update
  node engine (#5) (Jamie Young) [#5](https://github.com/jamsyoung/jq-cli-wrapper/pull/5)
* [[`4e99169d3f`](https://github.com/jamsyoung/jq-cli-wrapper/commit/4e99169d3f)] - **deps**: update
  node version to most current LTS (james young)
* [[`b0c44497ae`](https://github.com/jamsyoung/jq-cli-wrapper/commit/b0c44497ae)] - **deps**: set
  node engine to be >=, not exact (James Young

---

## 2015-12-08, Version 0.3.0, @jamsyoung

### Notable changes

* Support for Linux 32-bit

### Known issues

See https://github.com/jamsyoung/jq-cli-wrapper/labels/defect for complete and current list of known
issues.

### Commits

* [[`d27aedab20`](https://github.com/jamsyoung/jq-cli-wrapper/commit/d27aedab20)] - **linux**: add
  support for linux 32-bit (James Young)

---

## 2015-12-07, Version 0.2.0, @jamsyoung

### Notable changes

* Support for Linux 64-bit

---

## 2015-12-07, Version 0.1.0, @jamsyoung

### Notable changes

* Initial release - only support for OS X 64-bit
