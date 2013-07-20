$(document).ready(function(){
    document.addEventListener("deviceready", 
    function(){
        var onSuccess = function(position) {    
            alert(position.coords.latitude,position.coords.longitude);
        };
                  // onError Callback receives a PositionError object
                  //
                  function onError(error) {    
                      alert('code: '    + error.code    + '\n' +          'message: ' +
                            error.message + '\n');}
                    navigator.geolocation.getCurrentPosition(onSuccess, onError);  
    }, false);
});

function initialize(lat, lon) {
				//Posición del mapa
				var myOptions = {
					zoom: 10,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
				//Marcador
				var marker = new google.maps.Marker({
					position: latlng, 
					map: map, 
					title:"Mi posición actual"
				});
}  