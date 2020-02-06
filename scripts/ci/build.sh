#!/bin/bash

set -ex

mkdir bin
pushd bin
wget https://github.com/gohugoio/hugo/releases/download/v0.53/hugo_extended_0.53_Linux-64bit.tar.gz
tar -xvzf hugo_extended_0.53_Linux-64bit.tar.gz
popd

npm install

bin/hugo
bash scripts/ci/build-site-search-index.sh
bash scripts/ci/build-blog-search-index.sh
cp public/blog/atom.xml public/atom.xml
mkdir public/feed/ && cp public/blog/rss.xml public/feed/index.xml
echo "Done"
