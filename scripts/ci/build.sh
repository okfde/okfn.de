#!/bin/bash

set -ex

hugo

cat public/index.json | \
  node scripts/lunr/site-index.js > \
  public/js/site-search-index.json

cat public/blog/index.json | \
    node scripts/lunr/blog-index.js > \
         public/js/blog-search-index.json


cp public/blog/atom.xml public/atom.xml
mkdir public/feed/ && cp public/blog/rss.xml public/feed/index.xml
echo "Done"
