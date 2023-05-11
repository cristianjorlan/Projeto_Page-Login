const conteudo = document.querySelector('.conteudo');
const loginLink = document.querySelector('.login-register');
const registerLink = document.querySelector('.register-login');
const btnLogin = document.querySelector('.login-cima');
const iconClose = document.querySelector('.icon-close');
const iconClose2 = document.querySelector('.icon-close2');


loginLink.addEventListener('click', ()=> {
    conteudo.classList.add('active')
})

registerLink.addEventListener('click', ()=> {
    conteudo.classList.remove('active')
})

btnLogin.addEventListener('click', ()=> {
    conteudo.classList.add('active-btn')
})

iconClose.addEventListener('click', ()=> {
    conteudo.classList.remove('active-btn')
})

iconClose2.addEventListener('click', ()=> {
    conteudo.classList.remove('active-btn')
})