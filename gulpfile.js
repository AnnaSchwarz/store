var gulp = require('gulp');
var jade = require('gulp-jade');
var sass  = require('gulp-sass');
var browserSync = require('browser-sync');
var spritesmith = require('gulp.spritesmith');
var plumber = require('gulp-plumber');
//var compass = require('gulp-compass');



var jadePath = './app/_pages/*.jade';
var paths = {
    sass: {
        src: 'app/scss/**/*.scss',
        location: 'app/scss/main.scss',
        destination: 'app/css'
    }
};


gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src(jadePath)
		.pipe(plumber())
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty : '\t',
		}))
		.pipe(gulp.dest('app'))
});

gulp.task('sass', function () {
  gulp.src(paths.sass.location)
    .pipe(plumber())
    .pipe(gulp.dest(paths.sass.destination));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('app/img/all/*.png')
        .pipe(spritesmith({
            imgName: 'sprite_all.png',
            imgPath: '../img/sprite_all.png',
            cssName: 'sprite_all.scss'
        }));
    spriteData.img.pipe(gulp.dest('app/img/'));
    spriteData.css.pipe(gulp.dest('app/scss/'));
});

gulp.task('server', function () {
  browserSync({
    port: 9000,
    browser: ['google chrome'],
    server: {
      baseDir: 'app'
    }
  });
});


gulp.task('watch', function(){
	gulp.watch(jadePath, ['jade']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch([
    'app/*.html',
    'app/css/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['jade','sass','server','watch']);
