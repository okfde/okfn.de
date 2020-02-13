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
cp -Rf $HOME/public/* .

echo "Checking out orphan branch\n"
git init
git checkout --orphan release
git remote add origin https://${GITHUB_TOKEN}@github.com/${GH_USER}/${GH_REPO}.git > /dev/null

echo "Pushing built site\n"
git add -f . > /dev/null
git commit -m "Travis build $TRAVIS_BUILD_NUMBER" > /dev/null
git push -fq origin release > /dev/null

echo "Done updating release\n"

else
 echo "Skipped updating release, because build is not triggered from the master branch."
fi;
