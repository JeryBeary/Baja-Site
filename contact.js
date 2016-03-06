function initialize() {
	var map_canvas = document.getElementById("google_map");
	var map_properties = {
		center:new google.maps.LatLng(42.292989,-83.7106572),
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP		
	};
	var map=new google.maps.Map(map_canvas, map_properties);
}
google.maps.event.addDomListener(window, 'load', initialize);	
