'use strict';

// had enabled by egg
// exports.static = true;


exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};