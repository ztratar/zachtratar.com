$(function() {

	var $mainHeader = $('#main-header'),
		$mainHeaderContent = $mainHeader.find('.header-primary-content');

	$(window).on('scroll', function() {
		var totalHeaderScroll = 30,
			headerHeight = 460,
			animationBuffer = -40,
			scrollPos = $(window).scrollTop(),
			percentage = Math.min(1, scrollPos / (headerHeight - animationBuffer)),
			headerScroll = Math.ceil(totalHeaderScroll * percentage);

		$mainHeader.css({
			"-webkit-transform": "translateY(-"+headerScroll+"px)",
			"transform": "translateY(-"+headerScroll+"px)"
		});

		$mainHeaderContent.css({
			"-webkit-transform": "translate3d(0, -"+headerScroll+"px, 0)",
			"transform": "translate3d(0, -"+headerScroll+"px, 0)",
			"opacity": 1-percentage
		});

	});

	$('.fade-in').each(function(ind, item) {
		var $item = $(this),
			timeout = (ind+1) * 240;

		console.log($item, timeout);

		setTimeout(function() {
			$item.addClass('fade');
		}, timeout);
	});

});

