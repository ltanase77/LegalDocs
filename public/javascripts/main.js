
function initMap() {
    let element = document.getElementsByClassName('map')[0];
    let location = {lat: 44.461143, lng: 26.096871};
    let myMap = new google.maps.Map(element,
        {
            zoom: 16,
            center: location
        });

    let iconBase = "https://maps.google.com/mapfiles/kml/shapes/";

    let marker = new google.maps.Marker({
        position: location,
        map: myMap,
        title: "LegalDocs",
        animation: google.maps.Animation.DROP,
        icon: "images/lawyer.svg"
    });

    let contentHtml = '<div id="content"><div id="siteNotice>"<h2>LegalDocs</h2><p>Welcom to the LegalDocs headquarters</p></div></div.';
    let infoWindow = new google.maps.InfoWindow({
        content: contentHtml
    });
    marker.addListener('click', function () {
        infoWindow.open(myMap, marker);
    });
}

/*$("#addComment").on('submit', function(e) {

    $(".alert.alert-danger").hide();

    if (!$("input#name").val() || !$("textarea#comment").val()) {
        if (!$(".alert.alert-danger").length) {
            $(".alert.alert-danger").show();
        } else {
            $(this).prepend('<div role="alert" class="alert alert-danger">All fields arerequired, please try agains</div>');
        }
        return false
    }
});*/


