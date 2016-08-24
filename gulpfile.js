var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),//压缩样式
    autoprefixer = require('gulp-autoprefixer'),//前缀
    browserSync = require('browser-sync');//同步
var reload = browserSync.reload;

//定义文件路径
var paths = {
    css: {
        src  : 'src/sass/**/*.scss',
        dest : 'dist/css/'
    },
    html: {
        src  : 'src/html/**/*.html',
        dest : ''
    }
}

//sass
gulp.task('sass', function() {
	return gulp.src(paths.css.src)//读入文件内容
	.pipe(sass())//scss转化成css文件
	.pipe(gulp.dest(paths.css.dest))//写入目标目录
});

//同步
gulp.task('sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: './',
            index: "src/html/index.html"
        }
    });
    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch([paths.html.src, paths.css.src], reload);
});

gulp.task('default', ['sync']);