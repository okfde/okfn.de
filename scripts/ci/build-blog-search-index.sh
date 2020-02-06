#!/bin/bash

sed -e

cat $TRAVIS_BUILD_DIR/public/blog/index.json | \
    node $TRAVIS_BUILD_DIR/scripts/lunr/blog-index.js > \
         $TRAVIS_BUILD_DIR/public/js/blog-search-index.json
