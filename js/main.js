let containerMenu = document.getElementById('list-container');

document.getElementById('button').addEventListener('click', ()=>{
    containerMenu.style.transition = 'left 0.5s';
    containerMenu.classList.toggle('abierto');
});

window.addEventListener('resize',reset);
window.addEventListener('scroll',reset);

function reset(){
    containerMenu.style.transition = 'left 0s';
    containerMenu.classList.remove('abierto');
}