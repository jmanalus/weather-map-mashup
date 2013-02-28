function initialize(){  //sets the initial postion for google maps
	geocoder=new google.maps.Geocoder;
		map=new 
			google.maps.Map(document.getElementById("map_canvas"),{
				center:new google.maps.LatLng(37.777228,-122.428894),
				zoom:11,
				maxZoom:20,
				mapTypeControl:!1,
				streetViewControl:!0,
				streetViewControlOptions:
				{
					position:google.maps.ControlPosition.TOP_LEFT
				},
				zoomControl:!0,
				zoomControlOptions:{
					style:google.maps.ZoomControlStyle.SMALL,position:google.maps.ControlPosition.TOP_LEFT}
					,mapTypeId:layer,mapTypeControlOptions:{mapTypeIds:[layer]}});map.mapTypes.set(layer,


new google.maps.StamenMapType(layer)); //overlays the stamenMap designs 
					var a=document.getElementById("searchTextField"), //Search using the text field
					b=new google.maps.places.Autocomplete(a,{types:["geocode"]});b.bindTo("bounds",map);
						google.maps.event.addListener(b,"place_changed",function(){var a=b.getPlace();
							a.geometry.viewport?map.fitBounds(a.geometry.viewport):(map.setCenter(a.geometry.location),
								map.setZoom(17))});
									(new google.maps.weather.WeatherLayer({temperatureUnits:google.maps.weather.TemperatureUnit.FAHRENHEIT})).setMap(map);//temperture
									(new google.maps.weather.CloudLayer).setMap(map)}


function locategps() //Use the Geolocate Api to find the users location when they click fine me
	{navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a)
		{a=new google.maps.LatLng(a.coords.latitude,a.coords.longitude);
			map.setCenter(a);map.setZoom(12)},function(){handleNoGeolocation(!0)}):handleNoGeolocation(!1)
}

$(".tooltip-test").tooltip(); //bootstrap
	var coordinate,marker, //google maps coordinate 
		markerdrawn=!1,
			geocoder,layer="terrain", //Terrain style from stamenMap
				tableid=3334751,
					browserSupportFlag=new Boolean;


