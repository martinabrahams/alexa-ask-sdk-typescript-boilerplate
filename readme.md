# Alexa Skill TypeScript Boilerplate

[![Build status](https://ci.appveyor.com/api/projects/status/w1bto7x1lhvn7bet?svg=true)](https://ci.appveyor.com/project/martinabrahams/alexa-ask-sdk-typescript-boilerplate)

Boilerplate for the new typed [ask-sdk](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs/tree/2.0.x/ask-sdk). This implements the default AWS handlers and one custom intent named hello.


## Dependencies

- nodejs 8.x

## Get started

- Run `npm install` to install dependencies
- Run `npm run build` to transpile JavaScript (./src) to TypeScript (./dist)

## Build Dist Version

Run `sh ./build.sh` to create the dist output, suitable for zipping and deploying to Lambda.