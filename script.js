//player Name
let player1 = "Player1";
let player2 = "Player2";



function editNames() {
    player1 = prompt("Hi dice-rolling champ! 😅 Drop your name , and let's roll with it")
    player2 = prompt("Hi dice-rolling champ! 😅 Drop your name , and let's roll with it")

    if (player1.length < 1 || player2.length < 1) {
        alert('please enter valid name');
        return;
    }
    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}


// function to display fireworks
const element = document.querySelector(".pop-up");

function fireworkDisplay(){
  
  const duration = 6000; // duration in milliseconds
  element.style.display = "block"; // or "inline" or any other valid display value
  
  const intervalId = setInterval(function() {
    if (element.style.display === "none") {
      element.style.display = "block"; // or any other valid display value
    } else {
      element.style.display = "none";
    }
  }, 6000); // toggle the display value every 6 seconds
  
  // hide the element and clear the interval after the specified duration
  setTimeout(function() {
    clearInterval(intervalId);
    element.style.display = "none";
  }, duration);

}


function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");
    const clickSound2 = document.querySelector('#click-sound2');
    const clickSound = document.querySelector('#click-sound');
    clickSound.currentTime = 0;
    clickSound.play();

    diceNum1.setAttribute("src", "images/diceroll.gif")
    diceNum2.setAttribute("src", "images/diceroll.gif")

    let result = document.querySelector('h1')
    result.innerHTML = ""
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', 'images/dice'  + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'images/dice'  + randomNumber2 + '.png');

    // Determine the winner
      if (randomNumber1 === randomNumber2) {
        result.innerHTML = "Draw...<span class=jumping-emoji>😑</span>";
      } else if (randomNumber1 < randomNumber2) {
        result.innerHTML = "<span class='winner-name'>" + player2 + "</span> Won! <span class=jumping-emoji>🌟</span>";
        fireworkDisplay();
        clickSound2.currentTime = 0;
        clickSound2.play();
      } else {
        result.innerHTML = "<span class= 'winner-name'>" + player1 + "</span> Won! <span class=jumping-emoji>🌟</span>";
        fireworkDisplay();
        clickSound2.currentTime = 0;
        clickSound2.play();
      }
    },2500);

}

