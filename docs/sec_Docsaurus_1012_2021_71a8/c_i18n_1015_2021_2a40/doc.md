---
id: c_i18n_1015_2021_2a40
title: 日英対応
---

## 作業概要

これについては公式ドキュメントの
[i18n - Tutorial](https://docusaurus.io/docs/next/i18n/tutorial)に従えば良い。


いろいろ書いているが作業概要は以下の通り。

1. docsaurus.config.js`の編集
2. i18nディレクトリの作成


## docsaurus.config.jsの編集

以下の二点を編集する。(i18n, themeConfig.navbar)

```
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

Theme configuration#

Add a navbar item of type localeDropdown so that users can select the locale they want:
docusaurus.config.js

```
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
};
```

## i18nディレクトリの作成


以下を実行するとi18nディレクトリが作られる。

```
npm run write-translations -- --locale en
```

後は所定のディレクトリにMarkdownドキュメントをコピーして翻訳すれば良い。

Translate the docs

Copy your docs Markdown files to i18n/en/docusaurus-plugin-content-docs/current, and translate them:

```
mkdir -p i18n/en/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current
```



