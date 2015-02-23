/*
	jQuery Effects for OldTimeThrowdown.com/.../menu_"".html
	Version 1.0
	by Terry Griffin
*/


$(document).ready(function () 
{
	
/*SCROLL-AND-DROP MENU BAR from allaregreen.us*/


       $(window).bind('scroll', function() {																//Bind the following functions when the window scrolls
       var navHeight = $("#second").height() - 35;												//First, we'll call the height of the '#second' element "navHeight"
             if ($(window).scrollTop() > navHeight) {												//If the value of the scrollbar's position is greater than "navHeight"
                 $('#nav').addClass('jqMenu');																//Add this CSS class to the '#nav' element
                 $('#nav').removeClass('mainMenu');
             }
             else {
                 $('#nav').removeClass('jqMenu');
                 $('#nav').addClass('mainMenu');
             }
        });

/*END SCROLL-DROP MENU BAR*/


		/*$('#jqIcon7').css('backgroundColor','#123');
		/*$('#jqTestColumn5').css('backgroundColor','#143');*/
		

$('#jqIcon1').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon2').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon3').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon4').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon5').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon6').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});
		
$('#jqIcon7').hover( 											
		function () 		
		{	
			$(this 'img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$(this 'img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon8').hover( 											
		function () 		
		{	
			$('#jqIcon8 img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$('#jqIcon8 img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon9').hover( 											
		function () 		
		{	
			$('#jqIcon9 img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$('#jqIcon9 img').animate(
				{
					borderRadius: '100%'
				});																			
		});		
	
$('#jqIcon10').hover( 											
		function () 		
		{	
			$('#jqIcon10 img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$('#jqIcon10 img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon11').hover( 											
		function () 		
		{	
			$('#jqIcon11 img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$('#jqIcon11 img').animate(
				{
					borderRadius: '100%'
				});																			
		});

$('#jqIcon12').hover( 											
		function () 		
		{	
			$('#jqIcon12 img').animate(
				{
					borderRadius: '0%'
				});																	
		}, 
		function () 
		{		
			$('#jqIcon12 img').animate(
				{
					borderRadius: '100%'
				});																			
		});			
		
});