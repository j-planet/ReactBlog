#!/usr/bin/env bash

# make a new package.json
cp empty_package.json package.json

# install npm packages
npm i --save babel babel-core babel-loader babel-plugin-react-transform babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-preset-stage-1 babel-runtime coffee-script css-loader express history node-sass path react react-dom react-redux react-router redux redux-promise sass-loader style-loader webpack
npm i --save-dev babel-eslint react-hot-loader webpack-dev-middleware webpack-dev-server webpack-hot-middleware

# download bootstrap styles and js
curl -L -0 'https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip' > css/blah.zip
cd css
unzip blah.zip
rm blah.zip
