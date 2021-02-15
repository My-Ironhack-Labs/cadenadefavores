let myMap
function initMap() {
  myMap = new google.maps.Map(
    document.querySelector('#map'),
    { zoom: 10, center: { lat: 40.405231,  lng: -3.695939 }, styles: mapStyles.retro }
  )
  getDirections()
}
function getDirections() {
  axios
    .get('/api/favores')
    .then(response =>{
        console.log(response)
               pinFavours(response.data)
            })
    .catch(err => console.log(err))
}
function pinFavours(favours) {
    favours.forEach(elm => {
    let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
    let title=elm.title
    new google.maps.Marker({ position, title, map: myMap })
  })
}