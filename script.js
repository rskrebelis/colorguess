const colorDisplay = document.querySelector(".color-display");
const options = document.querySelectorAll(".option");
const scoreValue = document.querySelector(".score-value");
let score = 0;

function generateRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

function createOptions(correctIndex) {
    const colorOptions = [];
    for (let i = 0; i < 3; i++) {
        if (i === correctIndex) {
            colorOptions.push(colorDisplay.style.backgroundColor);
        } else {
            const randomColor = generateRandomColor();
            colorOptions.push(`rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`);
        }
    }
    return colorOptions;
}

function updateGame() {
    const correctIndex = Math.floor(Math.random() * 3);
    const randomColor = generateRandomColor();
    colorDisplay.style.backgroundColor = `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`;

    const colorOptions = createOptions(correctIndex);
    options.forEach((option, index) => {
        option.textContent = colorOptions[index].replace('rgb', '').replace('(', '').replace(')', '');
        option.onclick = () => {
            if (index === correctIndex) {
                score += 5;
                scoreValue.textContent = score;
                updateGame();
            } else {
                score = 0;
                scoreValue.textContent = score;
                updateGame();
            }
        };
    });
}

updateGame();
