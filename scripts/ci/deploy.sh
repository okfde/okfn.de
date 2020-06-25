#!/bin/bash

set -e # exit with nonzero exit code if anything fails

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

echo "Starting release \n"

#copy data we're interested in to other place
cp -R public $HOME/public

#go to home and setup git
cd $HOME
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis"

mkdir release
cd release

echo "Shallow-cloning release\n"
git clone --no-checkout --quiet --branch=release --depth 1 https://${GITHUB_TOKEN}@github.com/${GH_USER}/${GH_REPO}.git .
cp -Rf $HOME/public/* .

echo "Adding all changes and committing\n"
git add -A .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER" > /dev/null
echo "Pushing built site\n"
git push -fq origin release > /dev/null

echo "Done updating release\n"

else
 echo "Skipped updating release, because build is not triggered from the master branch."
fi;
