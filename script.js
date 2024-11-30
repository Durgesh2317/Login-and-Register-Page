const main = document.querySelector('.main');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    main.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    main.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    main.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    main.classList.remove('active-popup');
});
