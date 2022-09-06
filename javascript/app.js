/*
const btn = document.querySelector('.btn-button');

btn.addEventListener('click', () => {
    console.log('passou');
})

*/


function brirmenu() {
        let  barraMenuAberto = document.querySelector('.btn-button');

        if (barraMenuAberto.style.width == '0px') {
            barraMenuAberto.style.width = '300px';

        }
        else {
            barraMenuAberto.style.width = '0px';
        }
}
