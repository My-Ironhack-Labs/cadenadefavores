const Favour = require("../../models/favour.model");


let fav = document.querySelector('#hacerFav')
fav.addEventListener('click', () => {
    changeRol()
    console.log(`fav clicked: ${fav}`);
});

function changeRol() {
    Favour
    findByIdAndUpdate()
}