
function initMap() {
    var element = document.getElementsByClassName('map')[0];
    var location = {lat: 44.461143, lng: 26.096871 };
    var myMap = new google.maps.Map( element,
        {
            zoom: 16,
            center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: myMap
    });
}

