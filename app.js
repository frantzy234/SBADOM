const launchPrompt = () => {
    let dynamicText = prompt("Whats your name ?");
    let screen = document.querySelector(".screen");
 screen.innerHTML = "Welcome " + dynamicText +"! 😁";
};



const clickText = document.getElementById('clickText');

clickText.addEventListener('click', () => {
    clickText.style.color = "blue";

});







