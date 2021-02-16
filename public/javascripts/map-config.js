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
  let favoursArray = document.querySelectorAll(".favourList");
  console.log(favoursArray)

  favoursArray.forEach(favour => {
    let par = favour.querySelectorAll('p')
    geocoder.geocode({ address: par[2].innerHTML }, (results, status) => {
      console.log(par)
      if (status === "OK") {
        myMap.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map: myMap,
          title: par[0].innerHTML,
          position: results[0].geometry.location,
        });
        const contentString =
          `<div>` +
          `<h1>${par[0].innerHTML}</h1>` +
          `<div>` +
          `<p> ${par[1].innerHTML} </p>` +
          `<p> ${par[2].innerHTML} </p>` +
          `<a href="/favores/detalles/${par[3].innerHTML} ">Link</a> ` +
          `</div>` +
          `</div>`;
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        marker.addListener("click", () => {
          infowindow.open(myMap, marker);
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