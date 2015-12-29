
/*$(document).ready(function(){

        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);

$("button").mouseup(function(){
    $(this).blur();
})
});*/


$(function(){  // $(document).ready shorthand

	   var loc4 = '';
	$('.center_label').hide().fadeIn(1500);
var height = $(".img_wrap").height();
$("#image_4").hover(
	function()
	{
		loc4 = $("#caption_4").attr('src');
		$("#caption_4").animate({'margin-top': -($(".img_wrap").height())*.8}, 100);
	},
	function()
	{
		$("#caption_4").animate({'margin-top': ($(".img_wrap").height())*.01}, 100);
	}
	);
$("#image_3").hover(
	function()
	{
		$("#caption_3").animate({'margin-top': -($(".img_wrap").height())*.8}, 100);
	},
	function()
	{
		$("#caption_3").animate({'margin-top': ($(".img_wrap").height())*.01}, 100);
	}
	);
$("#image_2").hover(
	function()
	{
		$("#caption_2").animate({'margin-top': -($(".img_wrap").height()*.8)},100);
	},
	function()
	{
		$("#caption_2").animate({'margin-top': ($(".img_wrap").height())*.01}, 100);
	}
	);
$("#image_1").hover(
	function()
	{
		$("#caption_1").animate({'margin-top': -($(".img_wrap").height()*.8)},100);
	},
	function()
	{
		$("#caption_1").animate({'margin-top': ($(".img_wrap").height())*.01}, 100);
	}
	);
	
});

$(function()
	{
		$("#about").click(function() {
		    $('html,body').animate({
		        scrollTop: $("#introduction").offset().top},
		        1000);
		});
	});






/*var waypoint = new Waypoint({
  element: document.getElementById('introduction'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})*/


