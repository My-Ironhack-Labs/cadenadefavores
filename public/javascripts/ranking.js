
window.onload = () => {
    let ranking = document.getElementById('ranking').dataset.ranking
    let rankingtext = document.getElementById('ranking')
    console.log(ranking)
    if (ranking < 2) {
        rankingtext.innerHTML = 'Nivel: Usuario <img src="https://img.icons8.com/fluent/48/000000/dove.png"/>'
    }
    if (ranking > 1 && ranking < 3) {
        rankingtext.innerHTML = 'Nivel: Bronce <img src="https://img.icons8.com/officel/40/000000/olympic-medal-bronze.png"/>'
    }
    if (ranking > 2 && ranking < 5) {
        rankingtext.innerHTML = 'Nivel: Plata <img src="https://img.icons8.com/officel/40/000000/olympic-medal-silver.png"/>'
    }
    if (ranking > 4) {
        rankingtext.innerHTML = 'Nivel: Oro <img src="https://img.icons8.com/officel/40/000000/gold-medal.png"/>'
    }
}



