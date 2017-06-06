/**
 * 
 * @authors Nine-e (3287746498@qq.com)
 * @date    2017-05-29 15:21:02
 * @version 1.0.0
 */

$(initPage);

function initPage(){

	$.getJSON("index.json",function(data){
		navData = data.navigation;
		var navHtml = $.templates("#navTmpl").render(navData)
		$(".tmall").append(navHtml);

		searchData = data.search;
		var searchHtml = $.templates("#searchTmpl").render(searchData);
		$(".tmall").append(searchHtml);

		mainNavData = data.mainNav;
		var mainNavHtml = $.templates("#mainNavTmpl").render(mainNavData);
		$(".tmall").append(mainNavHtml);

		hotBrandData = data.hotBrand;
		var hotBrandHtml = $.templates("#hotBrandTmpl").render(hotBrandData);
		$(".tmall").append(hotBrandHtml);

		floorData = data.floor;
		var floorHtml = $.templates("#floorTmpl").render(floorData);
		$(".tmall").append(floorHtml);

		footer1Data = data.footer1;
		var footer1Html = $.templates("#footer1Tmpl").render(footer1Data);
		$(".tmall").append(footer1Html);

		footer2Data = data.footer2;
		var footer2Html = $.templates("#footer2Tmpl").render(footer2Data);
		$(".tmall").append(footer2Html);

        initCarousel();//回调
        mask();
        imgShake();
        useAffix();

	});

}

function initCarousel(){
        // 初始化轮播
            $("#myCarousel").carousel('cycle');
            $("#myCarousel").carousel({interval:20});
}

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

function imgShake(){
	$(".ui-floor-middle-item").mouseover(function(){
		$(this).find("img").css("margin-right","10px");
	});
	$(".ui-floor-middle-item").mouseout(function(){
		$(this).find("img").css("margin-right","0");
	});
	$(".ui-floor-left-item").mouseover(function(){
		$(this).find("img").css("margin-right","10px");
	});
	$(".ui-floor-left-item").mouseout(function(){
		$(this).find("img").css("margin-right","0");
	});
}

function useAffix(){
	$("#myNav").affix({
		offset:{
			top:1000
		}
	});
	$("#myScrollspy").scrollspy();
}