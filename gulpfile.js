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

var gulpCopy = require('gulp-copy');
var config = require('./gulpConfig.json');

var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");


/*==========================================================
js minification
==========================================================*/
gulp.task('js-watcher', function() {
    runSequence(['js-vendor','js-app',],
              'revreplace', 'cleanTmp');
});

gulp.task('js-vendor', function() {

    var normal = gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.vendor))
        .pipe(sourcemaps.write(config.sourcemapsDir))
        .pipe(gulp.dest(config.tmpDir + 'js'));

    var min = gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.vendor))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(sourcemaps.write(config.sourcemapsDir))
        .pipe(gulp.dest(config.tmpDir + 'js'));

    return es.concat(normal, min);

});


gulp.task('js-app', function() {

    var normal = gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.js))
        .pipe(sourcemaps.write(config.sourcemapsDir))
        .pipe(gulp.dest(config.tmpDir + 'js'));

    var min = gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.js))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(
            (gulpif( config.uglify, uglify({mangle: config.uglifyMangle}) ))
        )
        .pipe(sourcemaps.write(config.sourcemapsDir))
        .pipe(gulp.dest(config.tmpDir + 'js'));

    return es.concat(normal, min);

});



/*==========================================================
sass compile
==========================================================*/
gulp.task('sass-watcher', function() {
    runSequence('sass', 'revreplace', 'cleanTmp');
});

gulp.task('sass', function () {
    return sass(config.files.sass+'**/*.scss',{
        sourcemap: true
    })
    .on('error', function(err) {
        console.error('Error', err.message);
    })
    //chain to minify
    .pipe(cssmin())
    .pipe(sourcemaps.write(config.sourcemapsDir))
    .pipe(gulp.dest(config.tmpDir + 'css'))
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

gulp.task('cleanTmp', function () {
    return gulp.src(config.tmpDir + '**/*', {read: false})
        .pipe(clean({force: true}))
});


/*==========================================================
copy files to dist folder
==========================================================*/
gulp.task('copy', function() {
    return gulp.src(config.files.toCopy,{read:false})
      .pipe(gulpCopy(config.baseOutputDir, {}));
});


/*==========================================================
rev / minify html
==========================================================*/

gulp.task("revision", [ "sass", "js-vendor", "js-app"], function(){
  return gulp.src([
        config.tmpDir + '**/*.css', config.tmpDir + '**/*.js'
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
        .pipe(gulp.dest(config.outputDir.html))
        .pipe(gulpif( config.minifyHTML, minifyHTML(opts) ))
        .pipe(gulp.dest(config.outputDir.html));
});


gulp.task('html-watcher', function() {
    runSequence(['js-vendor', 'js-app', 'sass'], 'revreplace', 'cleanTmp');
});

/*==========================================================
watch tasks
==========================================================*/
gulp.task('watch', function() {
    gulp.watch(config.files.js, ['js-watcher']);
    gulp.watch(config.files.sass+'**/*.scss', ['sass-watcher']);
    gulp.watch(config.files.html, ['html-watcher']);
});


/*==========================================================
dist build
==========================================================*/
gulp.task('build', function(callback) {
  runSequence('clean','copy',
              ['js-vendor', 'js-app', 'sass', 'images'],
              'revreplace');
});



