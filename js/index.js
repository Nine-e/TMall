/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-29 15:21:02
 * @version $Id$
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

		pinkFloorData = data.pinkFloor;
		var pinkFloorHtml = $.templates("#pinkFloorTmpl").render(pinkFloorData);
		$(".tmall").append(pinkFloorHtml);

		footer1Data = data.footer1;
		var footer1Html = $.templates("#footerTmplOne").render(footer1Data);
		$(".tmall").append(footer1Html);

		footer2Data = data.footer2;
		var footer2Html = $.templates("#footerTmplTwo").render(footer2Data);
		$(".tmall").append(footer2Html);

		/*$("#myCarousel").carousel('cycle');
        $("#myCarousel").carousel({interval:200});*/

        initCarousel();//回调
        mask();

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

