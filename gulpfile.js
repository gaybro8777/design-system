﻿var gulp = require('gulp');
// var log = require('fancy-log');
var del = require('del');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
// var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var sh = require('gulp-sh');
var jshint = require('gulp-jshint');

var options = {
  sassInputLocationGlob: '_scss/**/*.scss',
  cssOutputLocation: './_site/css',
  jsOutputLocation: './_site/js',
  sassSourcemapsOutputLocation: 'sourcemaps', // TODO: I made this up. You may have to find where it's searching for the maps and output them there
  nodeSassOptions: {
    // Per the gulp readme at https://github.com/dlmanning/gulp-sass#readme,
    // These will be passed along directly. Options reference at https://github.com/sass/node-sass#options
    outputStyle: 'expanded',
    includePaths: [
      'node_modules/uswds/src/stylesheets',
      'node_modules/uswds/src/stylesheets/lib/'
    ]
  },
  logConcurrentOutput: true
}

gulp.task('default', ['clean', 'css', 'build']);

gulp.task('clean', ['clean-js', 'clean-css']);

gulp.task('clean-js', function(){
  return del([options.jsOutputLocation]);
});

gulp.task('clean-css', function(){
  return del([options.cssOutputLocation, options.sassSourcemapsOutputLocation]);
});


// grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
gulp.task('css', ['sass', 'autoprefixer', 'css-min']);

gulp.task('sass', ['clean-css'], function(){
  return gulp.src(options.sassInputLocationGlob)
    .pipe(sourcemaps.init())
    .pipe(sass(options.nodeSassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation))
});

gulp.task('autoprefixer', ['sass'], function()
{
  return gulp.src(options.cssOutputLocation + '**/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 3 versions', '> 2% in US']
    }))
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation))
});

gulp.task('css-min', ['autoprefixer'], function(){
  return gulp.src(options.cssOutputLocation + '**/*.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write(options.sassSourcemapsOutputLocation))
    .pipe(gulp.dest(options.cssOutputLocation))
});

gulp.task('watch-sass', function(){
  gulp.watch(options.sassInputLocationGlob, ['sass']);
});

gulp.task('jekyll-build', sh`bundle exec jekyll build`);
gulp.task('jekyll-serve', sh`bundle exec jekyll serve --baseurl ''`);

// grunt.registerTask('js', ['jshint:all', 'browserify', 'concat']);
gulp.task('js', ['jshint']);

gulp.task('jshint', function(){
  return gulp.src([
    'Gruntfile.js',
    'js/**/*.js',
    '!js/vendor/*.js',
    '!js/usajobs-design-system-base.js',
    '!js/usajobs-design-system-components.js',
    '!js/usajobs-design-system-documentation.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(require('jshint-stylish')));
})

// grunt.registerTask('build', ['shell:jekyllBuild', 'css', 'js']);
gulp.task('build', ['jekyll-build', 'css', 'js'])