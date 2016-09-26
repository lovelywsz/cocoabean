var gulp = require('gulp'),
    path = require('path'),
    plugins = require('gulp-load-plugins')(),//自动加载插件
    browserSync = require('browser-sync'),//同步
    reload = browserSync.reload;
    //sass = require('gulp-sass'),
    //cleancss = require('gulp-clean-css'),//压缩样式
    //autoprefixer = require('gulp-autoprefixer'),//前缀
    //iconFont = require('gulp-iconfont'),//字体图标
    //svgSprite = require('gulp-svg-sprite');//svg拼图 

//定义文件路径
var cocoabean = {
    src : './src/',
    dest : './dist/'
}
var paths = {
    css: {
        src  : path.join(cocoabean.src, 'sass/**/*.scss'),
        dest : path.join(cocoabean.dest, 'css/')
    },
    js: {
        src  : path.join(cocoabean.src, 'js/**/*.js'),
        dest : path.join(cocoabean.dest, 'js/')
    },
    svg: {
        src  : path.join(cocoabean.src, 'svg/**/*.svg'),
        dest : path.join(cocoabean.dest, 'iconsvg/')
    },
    images: {
        src  : path.join(cocoabean.src, 'images/**/*.jpg'),
        dest : path.join(cocoabean.dest, 'images/')
    },
    html: {
        src  : './html/**/*.html',
        dest : ('')
    },
    font: {
        src  : path.join(cocoabean.src, 'iconfont/**/*.svg'),
        dest : path.join(cocoabean.dest, 'iconfont/')
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
//压缩js
gulp.task('js', function () {
    return gulp.src(paths.js.src)
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.js.dest))
});
//压缩图片
gulp.task('imgMin', function() {
    return gulp.src(paths.images.src)
    .pipe(plugins.imagemin({
        progressive: true,//类型：Boolean 默认：false 无损压缩jpg图片
        svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
    }))
    .pipe(gulp.dest(paths.images.dest));
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
        dimension     : {
            maxWidth  : 30,
            maxHeight : 30
        },
        spacing       : {
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
gulp.task('sync', ['autoSprite','sass','iconFont','imgMin','js'], function() {
    browserSync({
        server: {
            baseDir: './',
            //index: "src/html/index.html"
        }
    });
    gulp.watch(paths.css.src, ['sass']);
    gulp.watch([paths.html.src, paths.js.src, paths.css.src], reload);
});

//执行命令
gulp.task('default', ['sync']);