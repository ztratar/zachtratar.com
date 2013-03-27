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
			$(elem).addClass('bannermove'+(item+1));
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

	$('.see-timeline').click(function() {
		if ($('ul.timeline').hasClass('full')) {
			$('ul.timeline').removeClass('full');
			$(this).html('See more');
		} else {
			$('ul.timeline').addClass('full');
			$(this).html('Hide');
		}	
		return false;
	});


});

