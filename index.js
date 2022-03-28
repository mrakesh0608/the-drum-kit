let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) 
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      let crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      let kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
        showerror();
        break;
    }
}
function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    //it will remove the pressed key after 100ms=0.1s
    setTimeout(function() {activeButton.classList.remove("pressed");} ,100);
}
function showerror()
{
    let msg = document.getElementById('msg-instruction');
    msg.style.display="block";
    msg.innerHTML="Please Enter Valid Keys only.<br>Valid Keys are W, A, S, D, J, K, L";
    
    //this msg will be visible for 5s only
    setTimeout(function() {msg.style.display="none";} ,5000);
}