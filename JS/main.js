const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');




btnPrev.addEventListener('click', () => {

})

window.addEventListener('scroll', () => {
    const navRegistro = document.querySelector('.nav_menu');
    
    if (navRegistro) {
        if (window.scrollY > 50) {
            navRegistro.classList.add('scrolled');
        } else {
            navRegistro.classList.remove('scrolled');
        }
    }
});