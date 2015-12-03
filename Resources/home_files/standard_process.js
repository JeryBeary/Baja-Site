
/*$(document).ready(function(){

        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);

$("button").mouseup(function(){
    $(this).blur();
})
});*/
$(function(){  // $(document).ready shorthand
	$('.center_label').hide().fadeIn(1500);
});

var height = $(".img_wrap").height();
$("#image_3").hover(
	function()
	{
		$("#caption_3").animate({left:'250px'});
	}
	);

/*var waypoint = new Waypoint({
  element: document.getElementById('introduction'),
  handler: function() {
    notify('Basic waypoint triggered')
  }
})*/


