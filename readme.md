[![Build Status](https://travis-ci.org/mumuy/relationship.svg?branch=gh-pages)](https://travis-ci.org/mumuy/relationship/)

由于工作生活节奏不同，如今很多关系稍疏远的亲戚之间来往并不多。因此放假回家过年时，往往会搞不清楚哪位亲戚应该喊什么称呼，很是尴尬。然而搞不清亲戚关系和亲戚称谓的不仅是小孩，就连年轻一代的大人也都常常模糊混乱。

“中国家庭称谓计算器”为你避免了这种尴尬，只需简单的输入即可算出称谓。输入框兼容了不同的叫法，你可以称呼父亲为：“老爸”、“爹地”、“老爷子”等等，方面不同地域的习惯叫法。快捷输入按键，只需简单的点击即可完成关系输入，算法还支持逆向查找称呼哦～！


演示地址：[http://passer-by.com/relationship/](http://passer-by.com/relationship/ )

借助这套算法结合react native开发的APP: [http://passer-by.com/relationship/app.html](http://passer-by.com/relationship/app.html)

在微信中搜索“亲戚关系”，还可以体验小程序版本

![亲戚关系计算器](http://passer-by.com/relationship/image/qrcode.jpg)

## 一、下载 & 安装

该 Javascript 库 / 模块可以用于前端也可以用于后端 Nodejs 中。

1. 直接下载dist/relationship.min.js，然后使用 `<script>`标签引入，可以得到全局的方法 `relationship`.
2. 使用 npm 进行包管理，具体为：

	> **npm install relationship.js**

然后使用 `require` 引入模块

```js
var relationship = require("relationship.js");
```


## 二、使用

使用很简单，只有一个 API 方法 `relationship(options)`.

```js
var options = {text:'儿子的爸爸的妈妈',sex:1};
relationship(options);
```

另外，参数`options`结构为：

```js
var options = {
	text:'',		//输入的文本
	sex:-1,			//自己的性别：0女性,1男性
	type:'default',		//转换类型：'default'算称谓,'chain'算关系(此时reverse无效)
	reverse:false		//称呼方式：true对方称呼我,false我称呼对方
};
```


## 三、开发 & 贡献

```sh
# 安装开发依赖
npm install 

# build 模块: 将 relationship 打包压缩
npm run build

# 执行测试用例（可以在tests/test.js中完善测试用例）
npm test
```

当然也可以直接浏览器打开 `index.html` 来在查看网页demo。


## 四、关于分歧

一些称呼存在南北方或地区差异，容易引起歧义，并不保证和你所处地区的称谓习惯一致。本程序主要以现代生活常见的理解为主。
* 媳妇：在古代或者当今北方地区指儿子的妻子，这里指自己的妻子。
* 大爷：北方指父亲的哥哥，这里指爷爷的哥哥
* 太太：一些地方指年长的妇人，这里指自己的妻子

## 五、其他

他们都在用：

查询网
http://www.ip138.com/chengwei/

在线查询网
http://qinshu.supfree.net/

在线工具
http://www.atool.org/relateship.php

有道语文达人
http://dict.youdao.com/k12yuwen/html/relation.html

小米MIUI系统计算器
http://www.miui.com/

小米MIUI网页版本
http://www.miui.com/zt/calculator2016/dist.php

符号库
http://www.fuhaoku.com/tool/qinqiguanxi.html
