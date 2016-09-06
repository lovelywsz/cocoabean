# cocoabean
##目的：
1、方便前端开发工程师在移动UI开发，做到直接提取模块代码，方便使用，提高工作效率。  
2、视觉上能保证做到整站统一规范  
3、有可预览视觉效果展示，方便快速查询使用  

##环境配置：
(如果已经安装最新版的nodejs环境请忽略步骤一二)
###1、安装nodejs的开发环境
a、先安装包管理工作home-brew输入命令（该命令源于http://brew.sh/）
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
b、然后用brew安装nodejs
```
brew install nodejs
```
###2、更新Nodejs环境
a、更新你已经安装的NPM库
```
npm update –g
```
b、更新Nodejs自身。
```
npm install –g n （安装n模块）
n latest（升级node.js到最新稳定版）
```
###3、安装 gulp
```
sudo npm install -g gulp
```
###4、ruby环境下安装 SASS
```
a、 curl -L https://get.rvm.io | bash -s stable
b、 source ~/.rvm/scripts/rvm
c、 gem source -a https://ruby.taobao.org
d、 gem install sass
e、 sass -v
```
在sublime text里安装sass插件
commod+shif+p 选择 package control install ，然后 输入sass / sass build

##框架结构：
项目根目录
```
├─dist             // 静态资源目录，由gulp命令生成
│  └─css           // 压缩之后的css文件
│  └─iconfont      // 静态资源图标字体文件
│  └─iconsvg       // 压缩之后的SVGsprit图片文件
│  └─images        // 压缩之后的banner/临时图片文件
│  └─js            // 压缩之后的JS文件
├─html             // 静态模板目录
│  └─module        // 模块
│  └─page          // 由模块拼装的页面
├─src              //产出 静态资源的源目录
│  └─sass          //各模块和页面的sass文件
│  │  ├─components // 组件sass文件
│  │  ├─core       // 基础sass文件
│  │  └─module     // 模块展示sass样式
│  │  └─page       // 页面展示sass样式
│  └─iconfont      // 图标字体SVG源文件
│  └─svg           // SVG源文件
│  └─images        // banner/临时图片源文件
│  └─js            // JS源文件
```
##组件库使用说明：
    该框架使用sass编写css代码，默认为IOS10系统样式，包括actionSheet,alert,toast,navigation,tabbar,form等常用的 UI 组件，使用iconfont制作小图标，定义了常用的文字颜色，按钮，列表等控件，采用rem和em单位适配移动端屏幕，针对iphone6
    plus和iPad在root的ont-size分别设置以1.06、1.25系数。
    config文件里设置了整个框架的常用变量，
    mixin文件设置了常用样式库，里面有Retina下的border为1px的设置，flex布局设置，文字截断处理函数，清除浮动等
    animation文件设置常用动画库
