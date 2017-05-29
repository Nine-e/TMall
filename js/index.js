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

		footer1Data = data.footer1;
		var footer1Html = $.templates("#footerTmplOne").render(footer1Data);
		$(".tmall").append(footer1Html);


	});

}
