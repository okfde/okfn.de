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

#using token clone release branch
git clone --quiet --branch=release https://${GITHUB_TOKEN}@github.com/${GH_USER}/${GH_REPO}.git release > /dev/null

#go into directory and copy data we're interested in to that directory
cd release
cp -Rf $HOME/public/* .

#add, commit and push files
git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
git push -fq origin release > /dev/null

echo "Done updating release\n"

else
 echo "Skipped updating release, because build is not triggered from the master branch."
fi;
