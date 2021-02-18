
window.onload = () => {
    let ranking = document.getElementById('ranking').dataset.ranking
    let rankingtext = document.getElementById('ranking')
    console.log(ranking)
    if (ranking < 5) {
        rankingtext.innerHTML = 'Ranking: Usuario'
    }
    if (ranking > 4 && ranking < 10) {
        rankingtext.innerHTML = 'Ranking: Bronce'
    }
    if (ranking > 9 && ranking < 15) {
        rankingtext.innerHTML = 'Ranking: Plata'
    }
    if (ranking > 14) {
        rankingtext.innerHTML = 'Ranking: Oro'
    }
}



