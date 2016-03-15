$(function()
{
	var ogWidthSilver = $('.silver_company').width();
	var ogHeightSilver = $('.silver_company').height();
	var ogWidthBronze = $('.bronze_company').width();
	var ogHeightBronze = $('.bronze_company').height();
	var hovered = false;
  $(".bronze_company").hover(function(){
  	if(!hovered)
  	{
    $(this).stop().animate({height:$('.bronze_company').height()+40, width:$('.bronze_company').width()+40},200);
	}	
	hovered = true;
	}
  ,function(){
  	if(hovered)
  	{
    $(this).stop().animate({height: ogHeightBronze, width: ogWidthBronze},200);
	}	
	    hovered = false;
	}
);
  $(".silver_company").hover(function(){
    $(this).stop().animate({height:$('.silver_company').height()+40, width:$('.silver_company').width()+40},200);
	}
  ,function(){
    $(this).stop().animate({height:ogHeightSilver, width:ogWidthSilver},200);
	}	
);
});