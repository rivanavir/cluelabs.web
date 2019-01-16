var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// var sassPaths = [
//   'node_modules/foundation-sites/scss',
//   'bower_components/motion-ui/src'
// ];

var serve = require('gulp-serve');
 
gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));
gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 443,
  https: true,
  middleware: function(req, res) {
    // custom optional middleware
  }
}));

var jsSources = ['js/**/*.js'],
    sassSources = ['assets/scss/**/*.scss'],
    htmlSources = ['*.html'];

gulp.task('sass', function () {
    return gulp.src(sassSources)
        .pipe($.sass({
            // includePaths: sassPaths,
            outputStyle: 'compressed'
        })
            .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browers: ['last 2 versions', 'ie >= 9']
        }))
        .pipe(gulp.dest('./assets/css'))
        // .pipe($.livereload());
});

gulp.task('reload', function () {
    return gulp.src(htmlSources)
        // .pipe($.livereload());
});

gulp.task('default', ['sass'], function () {
    // $.livereload.listen();
    gulp.watch([sassSources], ['sass']);
    // gulp.watch([jsSources], ['reload']);
    // gulp.watch([htmlSources], ['reload']);
});
