
const body = document.body;
const textBox = document.getElementById('container');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');


minusButton.addEventListener('click', subtact);
plusButton.addEventListener('click', add);


function subtact(){
    const number = textBox.innerText;
    const num = parseInt(number, 10);

    textBox.innerText = num - 1;


    if (num <= 0){
        textBox.style.color = 'red';
    }
}

function add(){
    const number = textBox.innerText;
    const num = parseInt(number, 10);

    textBox.innerText = num + 1;

    if(num >= 0){
        textBox.style.color = 'black';
    }

}