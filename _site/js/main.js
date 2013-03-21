$(function() {

	function moveItemLeft(index,item) {
		$(item).animate({
			left: $(item).css('left') - 10
		}, 1000);
	}

	function setUpCarousel() {
		$('ul.img-carousel').each(function(item, elem) {
			var newElem = $(elem).clone();
			newElem.appendTo($(elem).parent());
			(function() {
				var containedElem = elem,
					totalWidth = $(elem).width(),
					animateFunction = function() {
						$(containedElem).animate({
							'margin-left': -totalWidth
						}, 50000, 'linear', function() {
							$(containedElem).css('margin-left', 0);
							animateFunction();						
						});
					};
					animateFunction();
			})();
		});
	}

	setTimeout(function() {
		setUpCarousel();	
	}, 3000);

	$('.see-all-blog-posts').click(function() {
		$('.blog-posts-minimal').hide();	
		$('.blog-posts-full').show();	
		return false;
	});

	$('.see-more-about').click(function() {
		$(this).hide();
		$('.more-about').show();	
		return false;
	});


});

