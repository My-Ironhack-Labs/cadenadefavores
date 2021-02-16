let myMap
function initMap() {
  myMap = new google.maps.Map(
    document.querySelector('#map'),
    { zoom: 10, center: { lat: 40.405231, lng: -3.695939 }, styles: mapStyles.retro }
  )
  const geocoder = new google.maps.Geocoder();
  geocodeAddress(geocoder, myMap);
}

function geocodeAddress(geocoder, myMap) {
  let addressArray = document.querySelectorAll("#address");

  addressArray.forEach(city => {
    geocoder.geocode({ address: city.innerHTML }, (results, status) => {
      console.log(address)
      if (status === "OK") {
        myMap.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: myMap,
          title: "TEST",
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  })
  // geocoder.geocode({ address: address }, (results, status) => {
  //   console.log(address)
  //   if (status === "OK") {
  //     myMap.setCenter(results[0].geometry.location);
  //     new google.maps.Marker({
  //       map: myMap,
  //       position: results[0].geometry.location,
  //     });
  //   } else {
  //     alert("Geocode was not successful for the following reason: " + status);
  //   }
  // });
}


function getDirections() {
  axios
    .get('/api/favores')
    .then(response => {
      console.log(response)
      pinFavours(response.data)
    })
    .catch(err => console.log(err))
}
function pinFavours(favours) {
  favours.forEach(elm => {
    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    let title = elm.title
    new google.maps.Marker({ position, title, map: myMap })
  })
}