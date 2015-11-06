var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var minifyHTML = require('gulp-minify-html');
var clean = require('gulp-clean');
var es = require('event-stream');
var runSequence = require('run-sequence');
var config = require('./gulpConfig.json');



/*==========================================================
html minification
==========================================================*/
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  return gulp.src(config.files.html)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(config.outputdir));
});



/*==========================================================
js minification
==========================================================*/
gulp.task('js-vendor', function() {

    var normal = gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputdir + 'js'));

    var min = gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(uglify({
            mangle: true
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputdir + 'js'));

    return es.concat(normal, min);

});


gulp.task('js-app', function() {

    var normal = gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputdir + 'js'));

    var min = gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(uglify({
            mangle: true
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputdir + 'js'));

    return es.concat(normal, min);

});



/*==========================================================
sass compile
==========================================================*/

gulp.task('sass', function () {
    return sass(config.files.sass, {
            sourcemap: true
        })
        .on('error', function(err) {
            console.error('Error', err.message);
        })

    .pipe(sourcemaps.write('maps'))

    .pipe(gulp.dest(config.outputdir + 'css/'))
    
    //chain to minify
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.outputdir + 'css/min'));
});


/*==========================================================
image compression
==========================================================*/
gulp.task('images', () => {
    return gulp.src(config.files.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.outputdir+'/img/'));                
});



/*==========================================================
dist clean
==========================================================*/

gulp.task('clean', function () {
    return gulp.src(config.outputdir)
        .pipe(clean({force: true}))
});

/*==========================================================
dist build
==========================================================*/
gulp.task('build', function(callback) {
  runSequence('clean', 'copy',
              ['minify-html', 'js-vendor', 'js-app', 'sass']);
});


/*==========================================================
copy files to dist folder
==========================================================*/
gulp.task('copy', function() {
    return gulp.src(config.files.toCopy)
        .pipe(gulp.dest(config.outputdir));
});


/*==========================================================
watch tasks
==========================================================*/
gulp.task('watch', function() {
    gulp.watch(config.files.js, ['js-app']);
    gulp.watch(config.files.sass+'**/*.scss', ['sass']);
    gulp.watch(config.files.html, ['minify-html']);
});





