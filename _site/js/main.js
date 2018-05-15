$(function() {
	// For blog post pages
	var $addThis = $('.addthis_toolbox'),
		$window = $(window),
		windowHeight = $window.height(),
		windowWidth = $window.width(),
		widgetState = windowWidth > 940 ? 'large' : 'small',
		resizeWidgets;

	$addThis = $('.addthis_toolbox');
	if ($addThis) {
		$window.off('scroll.addThis').on('scroll.addThis', _.throttle(function() {
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

	$window.on('resize', _.throttle(function() {
		windowHeight = $window.height();
		windowWidth = $window.width();
	}, 16));

	window.resizeWidgets = resizeWidgets = function(forceNewState) {
		var widgetWidth = 450,
			origWidgetState = widgetState,
			commentsContainer = $('.fb-comments-container'),
			pageUrl = commentsContainer ? commentsContainer.attr('data-page-url') : undefined;

		if (windowWidth <= 960) {
			widgetWidth = 280;
			widgetState = 'small';
		} else {
			widgetState = 450;
			widgetState = 'large';
		}

		if (forceNewState || widgetState !== origWidgetState) {
			$('.fb-follow-container').html('<div class="fb-follow" data-href="http://www.facebook.com/ztratar" data-colorscheme="dark" data-layout="standard" data-show-faces="true" data-width="' + widgetWidth + '"></div>');
		}
		if (forceNewState || pageUrl) {
			$('.fb-comments-container').html('<div class="fb-comments" data-href="' + pageUrl + '" data-width="' + (widgetState === 'small' ? commentsContainer.width() : '700') + '" data-num-posts="10"></div>');
		}

		if (window.FB) {
			window.FB.XFBML.parse();
		}
	};
	$window.on('resize.socialWidgets', _.throttle(resizeWidgets, 200));

	resizeWidgets(true);

  $('.show-more-projects').on('click', function () {
    $('.project-default-hidden').show();
    $(this).hide();
  });
});
