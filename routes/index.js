var express = require('express');
var semver = require('semver');
var router = express.Router();
var package = require('../package.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'What version am I running?',
      actualNodeVersion: process.versions.node,
      requestedNodeVersion: package.engines.node,
      versionsMatch: semver.satisfies(process.versions.node, package.engines.node)
    });
});

module.exports = router;
