const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const disColor = document.getElementById('color') ;
const btn = document.querySelector('.btn');

btn.onclick = () =>{
    randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    disColor.innerText =  colors[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

