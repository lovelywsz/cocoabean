var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),//压缩样式
    autoprefixer = require('gulp-autoprefixer'),//前缀
    browserSync = require('browser-sync'),//同步
    reload = browserSync.reload,
    svgSprite = require('gulp-svg-sprite');//svg拼图
    

//定义文件路径
var paths = {
    css: {
        src  : 'src/sass/**/*.scss',
        dest : 'dist/css/'
    },
    svg: {
        src  : 'src/svg/**/*.svg',
        dest : 'dist/images/'
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
    .pipe(reload({ stream:true })); // 注入刷新页面
});

//自动构建svg雪碧图
var config            = {
    shape             : {
        dimension     : {         // Set maximum dimensions 
            maxWidth  : 32,
            maxHeight : 32
        },
        spacing       : {         // Add padding 
            padding   : 10
        }
    },
    mode              : {
        view           : {
            dest          : './',
            layout        : 'vertical',
            sprite        : 'sprite.svg',
            bust          : false
        }
    }
};
gulp.task('autoSprite',function() {
    return gulp.src(paths.svg.src)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(paths.svg.dest))
});

//同步
gulp.task('sync', ['autoSprite','sass'], function() {
    browserSync({
        server: {
            baseDir: './',
            index: "src/html/index.html"
        }
    });
    gulp.watch(paths.css.src, ['sass']);
    gulp.watch([paths.html.src, paths.css.src], reload);
});

//执行命令
gulp.task('default', ['sync']);