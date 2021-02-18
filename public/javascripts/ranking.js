
window.onload = () => {
    if (document.getElementById('ranking').innerHTML < 5) {
        console.log('hola')
        document.getElementById('ranking').innerHTML = 'Ranking: Usuario'
    }
    if (document.getElementById('ranking').innerHTML > 4 && document.getElementById('ranking').innerHTML < 10) {
        console.log('hola')
        document.getElementById('ranking').innerHTML = 'Ranking: Bronce'
    }
    if (document.getElementById('ranking').innerHTML > 9 && document.getElementById('ranking').innerHTML < 15) {
        console.log('hola')
        document.getElementById('ranking').innerHTML = 'Ranking: Plata'
    }
    if (document.getElementById('ranking').innerHTML > 14) {
        console.log('hola')
        document.getElementById('ranking').innerHTML = 'Ranking: Oro'
    }
}



