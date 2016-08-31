var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),//自动加载插件
    browserSync = require('browser-sync'),//同步
    reload = browserSync.reload;
    //sass = require('gulp-sass'),
    //cleancss = require('gulp-clean-css'),//压缩样式
    //autoprefixer = require('gulp-autoprefixer'),//前缀
    //iconFont = require('gulp-iconfont'),//字体图标
    //svgSprite = require('gulp-svg-sprite');//svg拼图 

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
    },
    font: {
        src  : 'src/iconfont/**/*.svg',
        dest : 'dist/iconfont/'
    }
}

//sass
gulp.task('sass', function() {
	return gulp.src(paths.css.src)//读入文件内容
	.pipe(plugins.sass())//scss转化成css文件
    .pipe(plugins.autoprefixer('last 2 version'))//主流浏览器最近2个版本用“last 2 versions”也可以新增('safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')；
	//.pipe(plugins.cleanCss())//压缩样式
    .pipe(gulp.dest(paths.css.dest))//写入目标目录
    .pipe(reload({ stream:true })); // 注入刷新页面
});

//创建图标字体
gulp.task('iconFont', function() {
   gulp.src(paths.font.src)
    .pipe(plugins.iconfont({
      fontName: 'cocofont', // required 
      appendCodepoints: true, // recommended option
      prependUnicode: true,
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      round : 10e0, 
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest(paths.font.dest));
});

//自动构建svg雪碧图
var config            = {
    shape             : {
        dimension     : {         // Set maximum dimensions 
            maxWidth  : 30,
            maxHeight : 30
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
    .pipe(plugins.svgSprite(config))
    .pipe(gulp.dest(paths.svg.dest))
});

//同步
gulp.task('sync', ['autoSprite','sass','iconFont'], function() {
    browserSync({
        server: {
            baseDir: './',
            //index: "src/html/index.html"
        }
    });
    gulp.watch(paths.css.src, ['sass']);
    gulp.watch([paths.html.src, paths.css.src], reload);
});

//执行命令
gulp.task('default', ['sync']);