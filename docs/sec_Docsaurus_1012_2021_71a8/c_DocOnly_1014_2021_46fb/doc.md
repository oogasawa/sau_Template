---
id: c_DocOnly_1014_2021_46fb
title: Doc-only Mode
slug: /
---


## 概要

以下の三点を行うことにより、飾りのトップページをスキップして最初からmarkdownのページが表示されるようになる。

- 以下の`routeBasePath`の部分により、Docs-only modeになる。
- `src/pages/index.js`が優先されるので、このファイルを削除するか名前を変えておく。
- トップページにするmarkdownドキュメントに`slug: /` を書く。


## routeBasePath

`docsaurus.config.js`中の以下の部分を編集する。（`routeBasePath: '/'`を書き足す）

```javascript
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            showLastUpdateTime: true,
            routeBasePath: '/',
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },

```

Docs-only modeにすると、上部メニューのパスなど他にも書き換えなければならない場所が
でてくるので、開発初期の段階でここを調整しておくことが重要である。


## slug

例えばMarkdownの冒頭で以下のように書く。

```
---
id: c_DocOnly_1014_2021_46fb
title: Doc-only Mode
slug: /
---

```


## 参考資料

- https://docusaurus.io/docs/docs-introduction#docs-only-mode
- https://docusaurus.io/docs/docs-introduction#home-page-docs
