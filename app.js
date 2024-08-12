const launchPrompt = () => {
    let dynamicText = prompt("Whats your name ?");
    let screen = document.querySelector(".screen");
 screen.innerHTML = "Welcome " + dynamicText +"! 😁";
};


const serviceText = document.getElementById('serviceText');

serviceText.addEventListener('click', () => {
    serviceText.style.color = "blue";

});



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


//Not working
function backButton(){
    window.history.back();
};
