function initialize() {
	var map_canvas = document.getElementById("google_map");
	var uluru = {lat: 42.292989, lng: -83.7106572};
	var map_properties = {
		center:new google.maps.LatLng(42.292989,-83.7106572),
		zoom:15,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(map_canvas, map_properties);

	var contentString = "<b>Michigan Baja Racing</b><br>" +
		"2603 Draper Drive<br>" +
		"Ann Arbor, MI 48109<br>";
	var infowindow = new google.maps.InfoWindow({
	      content: contentString});
	var marker = new google.maps.Marker({ position: uluru, map: map});

	infowindow.open(map, marker);
	//marker.addListener('click', function() {
    //      infowindow.open(map, marker);
    //    });
}
google.maps.event.addDomListener(window, 'load', initialize);
