#! /usr/bin/env bash

function unitTest {
    node -v
    npm -v
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
