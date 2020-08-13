const button = document.querySelector('button');
const output = document.querySelector('.output');

console.log(button);
button.addEventListener('click', function(){
    const cost = document.querySelector('input');
    console.log(cost.value*0.15);
    output.innerText = 'output';
}) 