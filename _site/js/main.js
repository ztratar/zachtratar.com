$(function() {
	'use strict'
	var nav = $('#nav'),
		windowHeight = $(window).height(),
		navHeight = nav.height(),
		placeNavTop,
		mainSections = $('#blog, #about, #work'),
		currentPageChangeTimeout = null,
		scrollChangeClassCurrent;

	// Place the about section of the page
	placeNavTop = function() {
		var resizeAmnt;
		windowHeight = $(window).height();
		resizeAmnt = Math.max(15, (windowHeight-navHeight)/2);
		nav.css('top', resizeAmnt);
		if (resizeAmnt === 15) {
			nav.css('position', 'absolute');
		} else {
			nav.css('position', 'fixed');
		}
	};
	
	$(window).on('resize.nav', placeNavTop);
	placeNavTop();

	mainSections.addClass('forceAnimation').addClass('back');

	$("a.overwrite-url").on('click', function(e) {

		if (currentPageChangeTimeout) {
			clearTimeout(currentPageChangeTimeout);
			scrollChangeClassCurrent();	
		}

		var target = $(e.currentTarget),
			urlAttr = target.attr('href'),
			goToPage = urlAttr.replace('/', ''),
			newPageElem = $('#' + goToPage),
			currentlyOpen = $('section.current');

		scrollChangeClassCurrent = function() {
			currentlyOpen	
				.scrollTop(0)
				.addClass('forceAnimation')
				.removeClass('forward')
				.addClass('back');	
			currentPageChangeTimeout = null;
		};

		// Already on ths page
		if (currentlyOpen && currentlyOpen[0] === newPageElem[0]) {
			return false;
		}

		$("a.overwrite-url").removeClass('active');
		target.addClass('active');

		currentlyOpen.removeClass('current');
		currentlyOpen.addClass('forward');
		currentPageChangeTimeout = setTimeout(scrollChangeClassCurrent, 500);

		newPageElem
			.removeClass('forceAnimation')
			.removeClass('back')
			.addClass('current');
		nav.addClass('left');

		return false;
	});

});

