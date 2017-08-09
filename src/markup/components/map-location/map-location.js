if (document.getElementById('location')) {

    let options = {
        zoom: 5,
        scrollwheel: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#9399A3"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#DFE1E4"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#DFE1E4"
                    }
                ]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        center: mapCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById('location'), options);

    for (let i = 0; i < mapPoints.length; i++) {
        let point = mapPoints[i];

        let marker = new google.maps.Marker({
            position: {lat: point.lat, lng: point.lng},
            map: map,
            icon: {
                url: '/static/img/assets/map-location/icon'+ point.icon +'.png',
            }
        });

        let contentString = '<div class="map-location__title">'+ point.city + '</div>'+
            '<div class="map-location__text map-location__text_descr">'+ point.address +'</div>'+
            '<div class="map-location__text">'+ point.descr + '</div>';

        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 270
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
            $('.gm-style-iw').prev().addClass('map-location__arr');
            $('.gm-style-iw').parent().addClass('map-location__inner');
        });
    }


    function addMarker(latLng, map) {
        let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: {
                url: '/static/img/assets/map-location/icon.png',
            }
        });

        map.panTo(latLng);

        let contentString = '<form class="map-location__form">'+
            '<input type="hidden" name="locat" value="'+ latLng +'">' +
            '<input type="text" name="name" class="map-location__input" placeholder="Название">' +
            '<textarea name="text" class="map-location__textarea" placeholder="Комментарий"></textarea>' +
            '<button type="submit" class="map-location__btn">Добавить</button>' +
            '</form>';

        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 270
        });

        infowindow.open(map, marker);
        $('.gm-style-iw').prev().addClass('map-location__arr');
        $('.gm-style-iw').parent().addClass('map-location__inner add');

        $('.map-location__form').on('submit', function (e) {
            e.preventDefault();
            console.log('submit form');

        });
    }

    map.addListener('click', function(e) {
        addMarker(e.latLng, map);
    });
}
