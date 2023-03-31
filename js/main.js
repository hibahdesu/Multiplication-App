const n1 = Math.ceil(Math.random() * 10);
const n2 = Math.ceil(Math.random() * 10);

const form = document.getElementById('form');
const inscore = document.getElementById('score');
const question = document.getElementById('question');
const input = document.getElementById('input');


let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = 0;
}

inscore.innerHTML = `Score: ${score}`

question.innerHTML = `What is ${n1} * ${n2}?`;

const answer = n1 * n2;

form.addEventListener('submit', () => {
    const userAnswer = +input.value;

    if (userAnswer === answer) {
        score++;
        scoreValue();
    } else {
        score--;
        scoreValue();
    }

})

function scoreValue() {
    localStorage.setItem('score', JSON.stringify(score));
}
