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

		footer1Data = data.footer1;
		var footer1Html = $.templates("#footerTmplOne").render(footer1Data);
		$(".tmall").append(footer1Html);

		footer2Data = data.footer2;
		var footer2Html = $.templates("#footerTmplTwo").render(footer2Data);
		$(".tmall").append(footer2Html);


	});

}

$(function(){
        // 初始化轮播
        $(".start-slide").click(function(){
            $("#myCarousel").carousel('cycle');
        });
});

