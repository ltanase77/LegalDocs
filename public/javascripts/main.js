
function initMap() {
    var element = document.getElementsByClassName('map')[0];
    var location = {lat: 44.461143, lng: 26.096871};
    var myMap = new google.maps.Map(element,
        {
            zoom: 16,
            center: location
        });

    var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";

    var marker = new google.maps.Marker({
        position: location,
        map: myMap,
        title: "LegalDocs",
        animation: google.maps.Animation.DROP,
        icon: "images/lawyer.svg"
    });

    var contentHtml = '<div id="content"><div id="siteNotice>"<h2>LegalDocs</h2><p>Welcom to the LegalDocs headquarters</p></div></div.';
    var infoWindow = new google.maps.InfoWindow({
        content: contentHtml
    });
    marker.addListener('click', function () {
        infoWindow.open(myMap, marker);
    });
}



