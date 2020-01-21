const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');

const button =  document.querySelector('.shake');

let counter = 0;
let x, y;

function draw(e) {
    ctx.lineWidth = 30;
    if (counter === 0) {
        x = Math.round(Math.random() * (1600 - 1) + 1);
        y = Math.round(Math.random() * (1000 - 1) + 1);
        ctx.beginPath(x, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 20);
        ctx.stroke();
        counter++;
    } else {
        if (e.key === 'ArrowUp') {
            y = y - 20;
            ctx.lineTo(x, y);
            ctx.stroke();
        } else if (e.key === 'ArrowDown') {
            y = y + 20;
            ctx.lineTo(x, y);
            ctx.stroke();
        } else if (e.key === 'ArrowRight') {
            x = x + 20;
            ctx.lineTo(x, y);
            ctx.stroke();
        } else if (e.key === 'ArrowLeft') {
            x = x - 20;
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

function shake() {
    counter = 0;
    ctx.closePath();
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setTimeout(() => {
        canvas.classList.remove('shake');
    }, 500);
}

button.addEventListener('click', shake);
document.addEventListener('keydown', draw);