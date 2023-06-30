#!/usr/bin/env bash

dest_dir=$HOME/public_html

npx browserslist@latest --update-db
yarn run build
rm -Rf ${dest_dir}/sau_Template00
cp -rp build $dest_dir/sau_Template00
