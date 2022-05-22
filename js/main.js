const navMobile = document.querySelector('.nav-mobile');
const burgerBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    burgerBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active')
}

burgerBtn.addEventListener('click', handleNav);

// stworzenie funkcji strzałkowej. stworzenie zmiennej z odświeżającą się datą year a następnie przypisanie jej do footerYear

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year
}

handleCurrentYear();