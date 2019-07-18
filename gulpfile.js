'use strict';


// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const browserSync = require('browser-sync').create();


var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';


// Compile SCSS
function style() {
    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST));
}


exports.default = style;