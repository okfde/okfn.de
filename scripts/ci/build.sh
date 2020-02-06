#!/bin/bash

set -ex

hugo

bash scripts/ci/build-site-search-index.sh
bash scripts/ci/build-blog-search-index.sh

cp public/blog/atom.xml public/atom.xml
mkdir public/feed/ && cp public/blog/rss.xml public/feed/index.xml
echo "Done"
