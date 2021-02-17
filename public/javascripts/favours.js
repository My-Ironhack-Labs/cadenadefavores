
let fav = document.querySelector('#hacerFav')
fav.addEventListener('click', () => {
    changeRol()
    document.querySelector('.status').innerHTML = 'required'
    console.log(`fav clicked: ${fav}`);
});

function changeRol() {

    axios
        .get(`/api/favores/detalles/${{ _id }}`)
        .then(response => {
            console.log('hola')
        })
        .catch(err => console.log(err))
}