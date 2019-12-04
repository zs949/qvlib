'use strict';

var binary = require('node-pre-gyp');
var path = require('path');
var bindingPath = binary.find(path.resolve(path.join(__dirname, './package.json')));
var binding = require(bindingPath);
module.exports = exports = binding;
/**
  * The entry point.
  *
  * @module Sequelize
  */
