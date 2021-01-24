const dice = document.getElementById("dice");


function roll() {

    let animation = setInterval(animate, 50);
    let rotationAngle = 45;
    let framesUp = 6;
    let marginTop = 1;
    let diceNum = Math.floor(Math.random()*6 + 1);

    function animate() {

        if (framesUp > 0) {
            dice.src = `./assets/dice${framesUp}.png`
            dice.style["margin-top"] = `${marginTop}%`;
            dice.style.transform = `rotate(${rotationAngle}deg)`;
            framesUp--;
            rotationAngle*=2;
            marginTop*=2;
        } else {
        dice.src = `./assets/dice${diceNum}.png`
        clearInterval(animation);
        }

    }

    document.getElementById("p2").innerHTML = "You rolled: " + diceNum;
    return diceNum;
}

dice.addEventListener("click", roll);