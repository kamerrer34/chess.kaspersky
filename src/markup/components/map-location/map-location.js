if (document.getElementById('location')) {

    let center = new google.maps.LatLng(55.7494733, 37.3523245);
    let points = [
        {
            lat: 53.8838069,
            lng: 27.4548931,
            icon: 1,
            city: 'Минск',
            address: 'Via Luigi Pulci, 14 - 00162 <br>Rome,  Italy',
            descr: 'The oldest chess club in Rome <br>(sibce 120 years,in several locations)'
        },
        {
            lat: 54.7000902,
            lng: 25.1128514,
            icon: 2,
            city: 'Вильнюс',
            address: 'Via Luigi Pulci, 14 - 00162 <br>Rome,  Italy',
            descr: 'The oldest chess club in Rome <br>(sibce 120 years,in several locations)'
        },
        {
            lat: 55.7494733,
            lng: 37.3523245,
            icon: 3,
            city: 'Москва',
            address: 'Via Luigi Pulci, 14 - 00162 <br>Rome,  Italy',
            descr: 'The oldest chess club in Rome <br>(sibce 120 years,in several locations)'
        },
        {
            lat: 56.2926609,
            lng: 43.7866646,
            icon: 1,
            city: 'Нижний Новгород',
            address: 'Via Luigi Pulci, 14 - 00162 <br>Rome,  Italy',
            descr: 'The oldest chess club in Rome <br>(sibce 120 years,in several locations)'
        },
        {
            lat: 49.994507,
            lng: 36.1457433,
            icon: 2,
            city: 'Харьков',
            address: 'Via Luigi Pulci, 14 - 00162 <br>Rome,  Italy',
            descr: 'The oldest chess club in Rome <br>(sibce 120 years,in several locations)'
        },
        {
            lat: 54.8086988,
            lng: 55.8807929,
            icon: 3,
            city: 'Уфа',
            address: 'Via Luigi Pulci, 14 - 00162 <br>Rome,  Italy',
            descr: 'The oldest chess club in Rome <br>(sibce 120 years,in several locations)'
        }
    ];

    let options = {
        zoom: 5,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById('location'), options);

    for (let i = 0; i < points.length; i++) {
        let point = points[i];

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
