/*
	Scopbable: All-Responsive Website 
	Version 1.0
	by Terry Griffin
*/


$(document).ready(function () 
{
	$('#no-script').remove();
	/*INTRO VIDEO COVER*/
	$('.introGraphic').hover(
		function () {
			$('.introGraphic').fadeTo('fast', 0.3);
		},			
		function () {
			$('.introGraphic').fadeTo('fast', 0.9);
		});	
		
	$('.introGraphic').click(function () 
		{
			$('.video-curtain').slideUp(2000, 'easeInOutElastic');
		});
	/*DIV HOVER-ANIMATE EFFECT*/																							
	$('.mainPageLink1').hover( 											
		function () 		
		{	
			$('.jq_columnImg1').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$('.jq_columnImg1').animate(
				{
					borderRadius: '100%'
				});																			
		});

	$('.mainPageLink2').hover( 											
		function () 		
		{	
			$('.jq_columnImg2').animate(
				{
					borderRadius: '0%'				
				});																	
		}, 
		function () 
		{		
			$('.jq_columnImg2').animate(
				{
					borderRadius: '100%'
				});																			
		});

	$('.mainPageLink3').hover( 											
		function () 		
		{	
			$('.jq_columnImg3').animate(
				{
					borderRadius: '0%'				
				});																	
		}, 
		function () 
		{		
			$('.jq_columnImg3').animate(
				{
					borderRadius: '100%'
				});																			
		});

	$('.mainPageLink4').hover( 											
		function () 		
		{	
			$('.jq_columnImg4').animate(
				{
					borderRadius: '0%'				
				});																	
		}, 
		function () 
		{		
			$('.jq_columnImg4').animate(
				{
					borderRadius: '100%'
				});																			
		});

	$('.mainPageLink5').hover( 											
		function () 		
		{	
			$('.jq_columnImg5').animate(
				{
					borderRadius: '0%'				
				});																	
		}, 
		function () 
		{		
			$('.jq_columnImg5').animate(
				{
					borderRadius: '100%'
				});																			
		});

	$('.mainPageLink6').hover( 											
		function () 		
		{	
			$('.jq_columnImg6').animate(
				{
					borderRadius: '0%'				
				});																	
		}, 
		function () 
		{		
			$('.jq_columnImg6').animate(
				{
					borderRadius: '100%'
				});																			
		});

	/*MAIN HYPERLINK FADE EFFECT*/
	$('.mainPageLink1').mouseenter(function () 
		{
			$('.mainPageLink1').fadeTo('fast', 0.25)
		});
   	  $ ('.mainPageLink1').mouseleave(function(){
    		 $ ('.mainPageLink1').fadeTo('fast', 1.0);
  	  });
  	  
  	  $('.mainPageLink2').mouseenter(function () 
		{
			$('.mainPageLink2').fadeTo('fast', 0.25)
		});
   	  $ ('.mainPageLink2').mouseleave(function(){
    		 $ ('.mainPageLink2').fadeTo('fast', 1.0);
  	  });
  	  
  	  	$('.mainPageLink3').mouseenter(function () 
		{
			$('.mainPageLink3').fadeTo('fast', 0.25)
		});
   	  $ ('.mainPageLink3').mouseleave(function(){
    		 $ ('.mainPageLink3').fadeTo('fast', 1.0);
  	  });
  	  
  	  	$('.mainPageLink4').mouseenter(function () 
		{
			$('.mainPageLink4').fadeTo('fast', 0.25)
		});
   	  $ ('.mainPageLink4').mouseleave(function(){
    		 $ ('.mainPageLink4').fadeTo('fast', 1.0);
  	  });
  	  
  	  	$('.mainPageLink5').mouseenter(function () 
		{
			$('.mainPageLink5').fadeTo('fast', 0.25)
		});
   	  $ ('.mainPageLink5').mouseleave(function(){
    		 $ ('.mainPageLink5').fadeTo('fast', 1.0);
  	  });
  	  
  	  	$('.mainPageLink6').mouseenter(function () 
		{
			$('.mainPageLink6').fadeTo('fast', 0.25)
		});
   	  $ ('.mainPageLink6').mouseleave(function(){
    		 $ ('.mainPageLink6').fadeTo('fast', 1.0);
  	  });
																							/*END MAIN HYPERLINK FADE EFFECT*/
});

