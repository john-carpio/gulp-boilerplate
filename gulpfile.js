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

var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var cssRev = require('gulp-rev-css-url');

var gutil = require('gulp-util');


var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

gulp.task('templates', function () {
    gulp.src('templates/**/*.handlebars')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
          namespace: 'MyApp.templates',
          noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('./js'));
});


/*==========================================================
js minification
==========================================================*/
gulp.task('js-watcher', function() {
    runSequence('cleanJS',
                ['js-vendor','js-app'],
                'js-rev', 'revreplace');
});

gulp.task('js-vendor', function() {

    return gulp.src(config.files.vendor)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.vendor))
        .pipe(sourcemaps.write(config.sourcemapsDir))
        .pipe(gulp.dest(config.tmpDir + 'js'));

});


gulp.task('js-app', function() {
     return gulp.src(config.files.js)
        .pipe(sourcemaps.init())
        .pipe(concat(config.outputNames.js))
        .pipe(sourcemaps.write(config.sourcemapsDir))
        .pipe(gulp.dest(config.tmpDir + 'js'));

});

gulp.task('js-rev', function() {
     return gulp.src(config.tmpDir + '**/*.js')
        .pipe(rev())
        .pipe(gulp.dest(config.baseOutputDir))
        .pipe(rev.manifest('./dist/rev-manifest.json', {
            base: process.cwd()+'/dist',
            merge: true
        }))
        .pipe(gulp.dest(config.baseOutputDir));
});


/*==========================================================
sass compile
==========================================================*/
gulp.task('css-watcher', function() {
    runSequence('cleanCSS',
                ['sass', 'images'],
                'css-rev', 'revreplace');
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

gulp.task('css-rev', function() {
 return gulp.src([
        config.tmpDir + '**/*.css',
        config.tmpDir + '**/*.jpg',
        config.tmpDir + '**/*.jpeg',
        config.tmpDir + '**/*.png',
        config.tmpDir + '**/*.gif',
        config.tmpDir + '**/*.svg'
    ])
    .pipe(rev())
    .pipe(cssRev())
    .pipe(gulp.dest(config.baseOutputDir))
    .pipe(rev.manifest('./dist/rev-manifest.json', {
        base: process.cwd()+'/dist',
        merge: true
    }))
    .pipe(gulp.dest(config.baseOutputDir));
});


/*==========================================================
image compression
==========================================================*/
gulp.task('image-watcher', function() {
    runSequence('cleanCSS',
                ['sass', 'images'],
                'css-rev', 'revreplace');
});

gulp.task('images', () => {
    return gulp.src(config.files.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.tmpDir+'img'));                
});



/*==========================================================
dist clean
==========================================================*/

gulp.task('clean', function () {
    return gulp.src(config.baseOutputDir)
        .pipe(clean({force: true}))
});

gulp.task('cleanJS', function () {
    return gulp.src(config.outputDir.js)
        .pipe(clean({force: true}))
});

gulp.task('cleanCSS', function () {
    return gulp.src(config.outputDir.sass)
        .pipe(clean({force: true}))
});

gulp.task('cleanImages', function () {
    return gulp.src(config.outputDir.images)
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

gulp.task('revision', [ 'sass', 'js-vendor', 'js-app'], function(){
  return gulp.src([
        config.tmpDir + '**/*'
    ])
    .pipe(rev())
    .pipe(cssRev())
    .pipe(gulp.dest(config.baseOutputDir))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.baseOutputDir))
})

gulp.task('revreplace', function(){
    var manifest = gulp.src('./' + config.baseOutputDir + '/rev-manifest.json');
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
    runSequence('revreplace');
});

/*==========================================================
watch tasks
==========================================================*/
gulp.task('watch', function() {
    gulp.watch(config.files.js, ['js-watcher']);
    gulp.watch(config.files.sass+'**/*.scss', ['css-watcher']);
    gulp.watch(config.files.html, ['html-watcher']);
    gulp.watch(config.files.images, ['image-watcher']);
});


/*==========================================================
dist build
==========================================================*/
gulp.task('build', function(callback) {
  runSequence('clean','copy','templates',
              ['js-vendor', 'js-app', 'sass', 'images'],
              'revision', 'revreplace');
});



