function blockButton () {
    axios
        .get(`api/favores/detalles/${{id}}`)
        .then(response => console.log('----------------------------------', response))
        .catch(err => console.log(err))
}


window.onload = () => blockButton()