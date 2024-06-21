#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'v 1.1'

git push -f git@github.com:f1anderz/PrecoroTestTask.git master:dist

cd -