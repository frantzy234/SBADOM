const launchPrompt = () => {
    let dynamicText = prompt("Whats your name ?");
    let screen = document.querySelector(".screen");
 screen.innerHTML = "Welcome " + dynamicText +"! 😁";
};



const clickText = document.getElementById('clickText');

clickText.addEventListener('click', () => {
    clickText.style.color = "red";

});



const mylist =document.getElementById('myList');
let newListItem = document.createElement('p');
newListItem.textContent = 'your information below';
mylist.appendChild(newListItem)



function like(){
    let oneLike = document.getElementById('oneLikeBtn');
    oneLike.setAttribute("disabled", true);
    oneLike.textContent = "Credited 👍";
}