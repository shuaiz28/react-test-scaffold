#! /usr/bin/env bash

function unitTest {
    node -v
    npm -v
    nvm use 14.4.0
    node -v
    npm install --cache-min Infinity --registry=https://registry.npm.taobao.org
    npm test
}

function display-usage {
    echo "Usage: $bash go.sh { install | test }"
}

case $1 in
    unitTest)
        unitTest
        ;;
    *)
        display-usage
        exit -1
esac
