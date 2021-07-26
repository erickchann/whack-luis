const grounds = document.querySelectorAll('.ground');
const objects = document.querySelectorAll('.object');
const scr = document.querySelector('.score h1');

let score = 0;
let last;

window.onload = init();

function init() {
    setInterval(() => {
        let rand = ~~(Math.random() * (grounds.length - 1));
        show(rand);
        last = rand;
    }, 800);
}

function show(key) {
    if (key == last) return;
    const object = grounds[key].firstElementChild;
    object.classList.add('show');

    setTimeout(() => {
        hide(object);
    }, 1200);
}

function hide(el) {
    el.classList.remove('show');
    setTimeout(() => el.style.backgroundImage = 'url(assets/head1.png)', 100);
}

function hit(e) {
    score++;
    this.style.backgroundImage = 'url(assets/head2.png)';
    const audio = new Audio('audio/punched.wav');
    audio.play();

    scr.innerHTML = `Score: ${score}`;
}

function audio() {
    const audio = new Audio('audio/punch.wav');
    audio.play();
}

objects.forEach(el => el.addEventListener('click', hit));
document.addEventListener('click', audio);