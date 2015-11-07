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
var gulpif = require('gulp-if');
var es = require('event-stream');
var runSequence = require('run-sequence');


var config = require('./gulpConfig.json');

var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");


/*==========================================================
js minification
==========================================================*/
gulp.task('js-vendor', function() {

    var normal = gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.vendor))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputDir + 'js'));

    var min = gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.vendor))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputDir.vendor));

    return es.concat(normal, min);

});


gulp.task('js-app', function() {

    var normal = gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.js))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputDir.js));

    var min = gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.js))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(
            (gulpif( config.uglify, uglify({mangle: config.uglifyMangle}) ))
        )
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(config.outputDir.js));

    return es.concat(normal, min);

});



/*==========================================================
sass compile
==========================================================*/

gulp.task('sass', function () {
    return sass(config.files.sass+'**/*.scss', {
            sourcemap: true
        })
        .on('error', function(err) {
            console.error('Error', err.message);
        })
    .pipe(rename({
        basename: config.outputNames.sass
    }))
    .pipe(sourcemaps.write('maps'))

    .pipe(gulp.dest(config.outputDir.sass))
    
    //chain to minify
    .pipe(cssmin())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(config.outputDir.sass))
    .pipe(rev.manifest())
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
        .pipe(gulp.dest(config.outputDir.images));                
});



/*==========================================================
dist clean
==========================================================*/

gulp.task('clean', function () {
    return gulp.src(config.baseOutputDir)
        .pipe(clean({force: true}))
});


gulp.task('cleanjs', function () {
    return gulp.src(config.outputDir.js)
        .pipe(clean({force: true}))
});

gulp.task('cleansass', function () {
    return gulp.src(config.outputDir.sass)
        .pipe(clean({force: true}))
});


/*==========================================================
copy files to dist folder
==========================================================*/
gulp.task('copy', function() {
    return gulp.src(config.files.toCopy,{read:false})
        .pipe(gulp.dest(config.baseOutputDir));
});


/*==========================================================
rev / minify html
==========================================================*/

gulp.task("revision", [ "sass", "js-vendor", "js-app"], function(){
  return gulp.src([
        config.baseOutputDir+'**/*.css', config.baseOutputDir+'**/*.js'
    ])
    .pipe(rev())
    .pipe(gulp.dest(config.baseOutputDir))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.baseOutputDir))
})

gulp.task("revreplace", ["revision"], function(){
  var manifest = gulp.src("./" + config.baseOutputDir + "/rev-manifest.json");
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src(config.files.html)
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulpif( config.minifyHTML, minifyHTML(opts) ))
    .pipe(gulp.dest(config.outputDir.html));
});


/*==========================================================
watch tasks
==========================================================*/
gulp.task('watch', function() {
    gulp.watch(config.files.js, ['js-app', 'revreplace']);
    gulp.watch(config.files.sass+'**/*.scss', ['sass']);
    gulp.watch(config.files.html, ['minify-html']);
});



/*==========================================================
dist build
==========================================================*/
gulp.task('build', function(callback) {
  runSequence('clean','copy',
              ['js-vendor', 'js-app', 'sass', 'images'],
              'revreplace');
});



