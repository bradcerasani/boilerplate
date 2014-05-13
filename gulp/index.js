var fs = require('fs');
var path = require("path");
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

function onlyScripts(name) {
  return /(\.(js)$)/i.test(path.extname(name));
}

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
