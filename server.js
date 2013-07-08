var http = require('http');
var url = require('url');
var https = require('https');
var fs = require('fs');
var Mustache = require('mustache');
var nconf = require('nconf');
var static = require('node-static');

nconf.file({ file: 'settings.json'}).env();

var get_html = function(builds, cb) {
  builds = parse_build_data(builds);
  fs.readFile('template.html', function(err, data) {
    var template = data.toString();
    cb(Mustache.render(template, {builds: builds}));
  });
};

var parse_build_data = function(data) {
  var output = [];
  data.forEach(function(row) {
    output.push({
      user: row.user.name.split(' ')[0],
      project: row.vcs_url.split('/')[row.vcs_url.split('/').length-1],
      branch: row.branch,
      status: row.status,
      green: row.status == 'success' || row.status == 'fixed',
      subject: row.subject
    });
  });
  return output;
};

var get_build_data = function(cb) {
  var builds_url = "https://circleci.com/api/v1/recent-builds?circle-token=" + nconf.get('circleToken');
  var options = url.parse(builds_url);
  var body = '';
  options.headers = {Accept:'application/json'};
  https.get(options, function(res) {
    res.on('data', function(data) {
      body += data;
    });
    res.on('end', function() {
      cb(JSON.parse(body));
    });
  });
};

var file = new(static.Server)('./static');

http.createServer(function(req, res) {
  //serve static files if path starts with /static
  if (req.url.indexOf('/static') === 0) {
    req.url = req.url.substring(7, req.url.length);
    file.serve(req, res);
    return;
  }
  //else, serve up api request
  res.writeHead(200, {'Content-Type': 'text/html'});
  get_build_data(function(data) {
    get_html(data, function(output) {
      res.end(output);
    });
  });
  }).listen(nconf.get('port'), nconf.get('bind_address'));

