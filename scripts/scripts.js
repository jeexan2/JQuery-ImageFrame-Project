/// <reference path="imageframe.js" />


var Service = {};
var jWindow, imageFrame1, imageFrame2;

Service.Element = (function (j) {
	return {
		Page: j('.landing-page'),
		PageLoader: j('.page-loader'),
		Container: j('.header-content .container')
	}
})(jQuery);


; (function (j) {
	j(function () {
		jWindow = j(window);

		jWindow.load(function () {
			Service.Element.Page.animate({
				'opacity': 1
			}, 1000);
			

			Service.Element.PageLoader.fadeOut(function () {
				imageFrame1 = j('.image-frame1').imageframe();
				imageFrame2 = j('.image-frame2').imageframe({
					interval: 1000,
					duration: 300
				});
			});
		}).resize(function () {
			Service.Element.PageLoader.height(jWindow.height());
		}).resize();

		// imageFrame1.stop();
		// imageFrame1.start();
	});
})(jQuery);



