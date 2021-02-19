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

favoursArray.forEach(favour => {
  let par = favour.querySelectorAll('p')
  geocoder.geocode({ address: par[2].innerHTML }, (results, status) => {
    if (status === "OK") {
      myMap.setCenter(results[0].geometry.location);
      const marker = new google.maps.Marker({
          map: myMap,
          title: par[0].innerHTML,
          position: results[0].geometry.location,
       });

       const contentString =
          `<div>` +
          `<h1 style="color:#195f2a">${par[0].innerHTML}</h1>` +
          `<div>` +
          `<p style="color:#195f2a"> ${par[1].innerHTML} </p>` +
          `<p style="color:#195f2a"> ${par[2].innerHTML} </p>` +
          `<p style="color:#195f2a"> ${par[3].innerHTML} </p>` +
          `<a style="color:#195f2a" href="/favores/detalles/${par[4].innerHTML} ">Link</a> ` +
          `</div>` +
          `</div>`;
      const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        marker.addListener("click", () => {
          infowindow.open(myMap, marker);
        });
      }else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  })
}

function getDirections() {
  axios
    .get('/api/favores')
    .then(response => pinFavours(response.data))
    .catch(err => console.log(err))
}

function pinFavours(favours) {
  favours.forEach(elm => {
    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    let title = elm.title
    new google.maps.Marker({ position, title, map: myMap })
  })
}