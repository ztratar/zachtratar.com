$(function() {
	// For blog post pages
	var $addThis = $('.addthis_toolbox'),
		$window = $(window),
		windowHeight = $window.height();

	$window.on('resize', _.throttle(function() {
		windowHeight = $window.height();
	}, 16));

	if ($addThis) {
		$window.on('scroll', _.throttle(function() {
			var scroll = $window.scrollTop();			
			if ((windowHeight > 630 && scroll > 530)
					|| (windowHeight <= 630 && windowHeight > 560 && scroll > 460)
					|| (windowHeight <= 560 && scroll > 370)) {
				$addThis.addClass('fixed');	
			} else {
				$addThis.removeClass('fixed');	
			}	
		}, 16));
	}
});

