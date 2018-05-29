#!/bin/bash

# Generate build output for deploy environment
echo Starting Build

# npm install
yarn

# transpile typescript to js (into ./dist subfolder)
yarn build

# copy package.json to dist
cp package.json ./dist

# copy node_modules to dist
cp -R node_modules dist/node_modules/

echo Build Finished