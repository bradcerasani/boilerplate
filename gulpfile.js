// Tasks are defined in ./gulp/tasks directory
'use strict';

var gulp = require('gulp');
var HubRegistry = require('gulp-hub');

var hub = new HubRegistry(['gulp/tasks/*.js']);

gulp.registry(hub);