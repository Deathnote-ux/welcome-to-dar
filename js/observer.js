//our experties
const landingPage = document.querySelector('.landing-page');
const header = document.querySelector('header');

const options = {};
const headerObserver = new IntersectionObserver((entires, headerObserver) => {
    entires.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}, options);

headerObserver.observe(landingPage);