	var tokyo = new google.maps.LatLng(35.660944, 139.720100);
	var parliament = new google.maps.LatLng(35.660944, 139.720100);
	var marker;
	var map;


	function initialize() {
	  var mapOptions = {
	    zoom: 15,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    center: tokyo,
	    disableDefaultUI: true,
	    scrollwheel: false,
	    zoomControl: true,
	    zoomControlOptions: {
		    style: google.maps.ZoomControlStyle.SMALL
			}
	  };


	  map = new google.maps.Map(document.getElementById('map-canvas'),
	          mapOptions);


	  marker = new google.maps.Marker({
	    map:map,
	    draggable:true,
	    animation: google.maps.Animation.DROP,
	    position: parliament
	  });
	  google.maps.event.addListener(marker, 'click', toggleBounce);
	}


	function toggleBounce() {


	  if (marker.getAnimation() != null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }
	}


	google.maps.event.addDomListener(window, 'load', initialize);
