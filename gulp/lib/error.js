import notify from 'gulp-notify';

module.exports = function() {
  const args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: '<%= error.plugin %>',
    message: 'Error: <%= error.message %>',
  }).apply(this, args);

  this.emit('end');
};
