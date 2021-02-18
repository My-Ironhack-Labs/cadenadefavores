
window.onload = () => {
    let ranking = document.getElementById('ranking').dataset.ranking
    let rankingtext = document.getElementById('ranking')
    console.log(ranking)
    if (ranking < 5) {
        console.log('hola')
        rankingtext.innerHTML = 'Ranking: Usuario'
        console.log(rankingtext)
    }
    if (ranking > 4 && ranking < 10) {
        console.log('hola')
        rankingtext.innerHTML = 'Ranking: Bronce'
    }
    if (ranking > 9 && ranking < 15) {
        console.log('hola')
        rankingtext = 'Ranking: Plata'
    }
    if (ranking > 14) {
        console.log('hola')
        rankingtext = 'Ranking: Oro'
    }
}



