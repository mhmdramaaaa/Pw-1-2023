let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.queryselector('.navbar');

document.queryselector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.unscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}




let header = document.queryselector('header');

window.addEventListener('scroll' , () => {
        header.classList.toggle('shadow',window.scroll > 0);
});