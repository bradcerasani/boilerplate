var notify = require("gulp-notify");

module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: "<%= error.plugin %>",
    message: "<%= error.message %>"
  }).apply(this, args);

  this.emit('end');
};
