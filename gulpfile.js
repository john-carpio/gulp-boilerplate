var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');


var outputdir = 'dist/',
    sourcedir = 'src/',
    bowerdir = 'bower_components/'
 
var paths = {
    bower: [
        // bowerdir+'angular-sanitize/angular-sanitize.js'
    ],
    js: [
        // sourcedir+'js/app.js',
        // sourcedir+'js/config.js',
        // sourcedir+'js/routes.js',
        // sourcedir+'js/utils.js',
        
        // sourcedir+'js/user/service.js',
        // sourcedir+'js/user/loginController.js',
        // sourcedir+'js/user/signUpController.js',
        // sourcedir+'js/newsletter/**/*.js',
        // sourcedir+'js/element/**/*.js',
    ],
    sass: sourcedir+'scss/',
    images: sourcedir+'img/**/*'
}


gulp.task('js-vendor', function() {
    gulp.src(paths.bower)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(outputdir + 'js'))
});
gulp.task('js-app', function() {
    gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(outputdir + 'js'))
});
gulp.task('minify-js', function() {
    gulp.src([
            outputdir + 'js/vendor.js',
            outputdir + 'js/app.js'
        ])
        .pipe(uglify())
        .pipe(rename({
            basename: 'all',
            extname: '.min.js'
        }))
        .pipe(gulp.dest(outputdir + 'js'));
})


gulp.task('sass', function () {
    return sass(paths.sass, {
            sourcemap: true
        })
        .on('error', function(err) {
            console.error('Error', err.message);
        })

    .pipe(sourcemaps.write('maps'))

    .pipe(gulp.dest(outputdir + 'css/'))
    
    //chain to minify
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(outputdir + 'css/min'));
});


gulp.task('watch', function() {
    gulp.watch(paths.js, ['js-app', 'minify-js']);
    gulp.watch(paths.sass+'**/*.scss', ['sass']);
});

gulp.task('default', ['js-vendor', 'js-app', 'minify-js', 'sass']);


