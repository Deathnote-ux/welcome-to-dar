const counter = document.querySelector('.counter');

function playTimer() {
    let client = 0;
    let award = 0;
    let project = 0;
    let mail = 0;

    const clientTime = setInterval(() => {
        counter.querySelector('#client').textContent = `${client}`;
        client++;
        if (client === 43) {
            clearInterval(clientTime);
        }

    }, 20);

    const awardTime = setInterval(()=>{
        counter.querySelector('#award').textContent = `${award}`;
        award++;
        if (award === 20) {
            clearInterval(awardTime);
        }
    }, 20);

    const projectTime = setInterval(()=>{
        counter.querySelector('#project').textContent = `${project}`;
        project++;
        if (project === 34) {
            clearInterval(projectTime);
        }
    }, 20);

    const mailTime = setInterval(()=>{
        counter.querySelector('#mail').textContent = `${mail}`;
        mail++;
        if (mail === 1298) {
            clearInterval(mailTime);
        }
    }, .005);
}
const counterContainer = document.querySelector('.counter');
const obs = document.querySelector('.obs');
const obs1 = document.querySelector('.obs-1');
const obs2 = document.querySelector('.obs-2');
const obs3 = document.querySelector('.obs-3');
const obs4 = document.querySelector('.obs-4');
const obs5 = document.querySelector('.obs-5');

const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entries, slideObserver) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            playTimer();
            obs.classList.add('active');
            obs1.classList.add('active');
            obs2.classList.add('active');
            obs3.classList.add('active');
            obs4.classList.add('active');
            obs5.classList.add('active');
        }
    });
}, slideObserverOptions);

slideObserver.observe(counterContainer);

