# TMall
### 模仿天猫主页内容

---

### 一. 代码结构
#### 用到的语言和框架：
HTML CSS JS

Bootstrap Flex JQuery

jsrender less

---
#### index.html的结构1

	<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>TMall</title>
	<meta name="viewport" content="width=device-width,initial-scale=1">

	<link rel="stylesheet" type="text/css" href="lib/bootstrap-3.3.7-dist/css/bootstrap.min.css">
	<link href="css/index.less" rel="stylesheet/less">
	</head>

	<body data-spy="scroll" data-target="#myScrollspy">
	<div class="tmall"></div>

	<script type="text/javascript" src="lib/jquery/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="lib/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
	<script src="lib/jsrender/jsrender.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	</body>
	</html>

---

#### index.html的结构2

	<script type="text/x-jsrender" id="navTmpl">
	<nav>
	<div>
		{{for left}}
		<span><a href="#">{{:text}}</a></span>
		{{/for}}

		{{for right}}
		<span class="float-right"><a href="#">{{:text}}</a></span>
		{{/for}}
	</div>
	</nav>

	</script>

---

#### index.js的结构

##### 五个function:initPage initCarousel  mask  imgShake  useAffix

其中initPage加载html中的script模板与json中的数据
	function initPage(){

		$.getJSON("index.json",function(data){
			navData = data.navigation;
			var navHtml = $.templates("#navTmpl").render(navData)
			$(".tmall").append(navHtml);
	});
	}

---

#### index.json的结构

##### 就遵循JSON语法
##### 注意数组中元素加 {} ，最后一个元素后没有 ，
##### 如下

	"navigation":{
			"left":[
			{"text":"喵，欢迎来到天猫"},
			{"text":"请登录"},
			{"text":"免费注册"}],

			"right":[
			{"text":"网站导航"},
			{"text":"商家支持"},
			{"text":"企业购"},
			{"text":"淘宝网"},
			{"text":"手机版"},
			{"text":"收藏夹"},
			{"text":"购物车"},
			{"text":"我关注的品牌"},
			{"text":"我的淘宝"}]
		}

---

### index.less的风格

css书写顺序

1.位置属性（position top right z-index display float）

2.大小（width height padding margin）

3.文字系列（font line-height color text-align）

4.背景（backgroud border）

5.其他（animation transition）

---

命名方法：

id用驼峰法命名，如 navTmpl

class用 - 相连，如 ui-search-content"

去掉小数点前的0

---

### 二.遇到的那些坑

---

mask交互时，JQuery元素的选取

	function mask(){
		//处理mask\cover交互
		$(".mask").hide();
		$(".ui-hotBrand-slive-item").mouseover(function(){
			$(this).children().show();
			var newsrc = $(this).find("img")[0].src;//难点1
			/*console.log($("#gliveImg")[0].src);*/
			$("#gliveImg").attr('src',newsrc);
			/*console.log(newsrc);*/
		});
		$(".ui-hotBrand-slive-item").mouseout(function(){
			$(".ui-hotBrand-slive-cover").hide();
		});
		$(".ui-hotBrand-brand-item").mouseover(function(){
			$(this).children().show();
		});
		$(".ui-hotBrand-brand-item").mouseout(function(){
			$(".ui-hotBrand-brand-item-cover").hide();
		});
	}

---

滚动监听

data-spy="scroll" data-target="#myScrollspy"

要加在body元素上才有效

---

### 三.幻灯片效果的实现
#### HTML+reveal.js+Markdown




