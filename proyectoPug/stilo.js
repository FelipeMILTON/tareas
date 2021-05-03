const menu = document.querySelector('.menu');
const menudenavegacion = document.querySelector('.menudenavegacion');

console.log(menudenavegacion)
console.log(menu)

menu.addEventListener('click', ()=>{
    menudenavegacion.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(menudenavegacion.classList.contains('spread')&& e.target != menudenavegacion && e.target != menu ){
        menudenavegacion.classList.toggle("spread")

    }
})