/*
	Scopbable: All-Responsive Website 
	Version 1.0
	by Terry Griffin
*/

$(document).ready(function () {
	
	// VIDEO CURTAIN		
	$('.intro-graphic').click(function () {
			$('.video-curtain').slideUp(2000, 'easeInOutElastic');
	});

	// GRID IMAGE ANIMATION
	$('.item.one').hover( function() { 											
		$('.item.one img').toggleClass('radius', 200);
	});
	$('.item.two').hover( function() { 											
		$('.item.two img').toggleClass('radius', 200);
	});
	$('.item.three').hover( function() { 											
		$('.item.three img').toggleClass('radius', 200);
	});
	$('.item.four').hover( function() { 											
		$('.item.four img').toggleClass('radius', 200);
	});
	$('.item.five').hover( function() { 											
		$('.item.five img').toggleClass('radius', 200);
	});
	$('.item.six').hover( function() { 											
		$('.item.six img').toggleClass('radius', 200);
	});
																							/*END MAIN HYPERLINK FADE EFFECT*/
});

