var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var postcss     = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');

// var gcmq = require('gulp-group-css-media-queries');

var mode = "css";


/**
 * Reload the page after SASS
 */
gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: 'public'
        },
        notify: false,
        open: false
    });
});

/**
 * Compile .css file from main.scss
 */
gulp.task('sass', function () {
    return gulp.src(['_sass/main.scss'])
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({stream:true}))
});

/**
 * Jade task
 */

gulp.task('jade', function(){
    gulp.src('_jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public'));

    // gulp.src('_jade/modules/*.jade')
    //     .pipe(jade())
    //     .pipe(gulp.dest('public/modules'));
});

/**
 * Watch task
 */

gulp.task('watch', function() {
    gulp.watch('_sass/**', ['sass']);
    gulp.watch('_jade/**', ['jade']);
    gulp.watch(['public/js/**']).on('change', function () {
        browserSync.reload();
    });
    gulp.watch(['index.html', 'public/*.html']).on('change', function () {
        browserSync.reload();
    });
});

/**
 * Redefine default gulp task
 */
gulp.task('watcher', ['browser-sync', 'watch']);


/**
 * Clean css task
 */
// gulp.task('clean', function () {
//     gulp.src('_site/css/main.css')
//         // .pipe(clean())
//         // .pipe(gcmq())
//         .pipe(gulp.dest('_site/css/min'));
// });