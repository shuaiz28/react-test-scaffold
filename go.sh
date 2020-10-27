#! /usr/bin/env bash

function unitTest {
    node -v
    npm -v
    npm install --cache-min Infinity --registry=https://registry.npm.taobao.org
    npm test
}

function e2eTest {
  npm run cypress
}

function display-usage {
    echo "Usage: $bash go.sh { install | test }"
}

case $1 in
    unitTest)
        unitTest
        ;;
    e2eTest)
        e2eTest
        ;;
    *)
        display-usage
        exit -1
esac
