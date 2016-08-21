var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
	console.log("hi");
	return gulp.src('src/sass/**/*.scss')//读入文件内容
	.pipe(sass())//scss转化成css文件
	.pipe(gulp.dest('dist/css'))//写入目标目录
});

gulp.task('default', ['sass']);