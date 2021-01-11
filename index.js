


function gif() {
  if (document.querySelector(".cat").src == "question-mark.jpg") {
    document.querySelector(".cat").src = "question-mark.jpg"
  } else {
    document.querySelector(".cat").src = "sounds/catjam.gif"
  }

}

function gif2() {
  if (document.querySelector(".catp").src == "question-mark2.jpg") {
    document.querySelector(".catp").src = "question-mark2.jpg"
  } else {
    document.querySelector(".catp").src = "sounds/pop cat.gif"
  }

}


document.addEventListener ("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
  var lp = new Audio ("sounds/lp1.mp3");
  lp.play();
      break;
      case "a":
      var lp = new Audio ("sounds/lp2.mp3");
      lp.play();
      break;
      case "d" :
      var lp = new Audio ("sounds/lp3.mp3");
      lp.play();
    default:
console.log(buttonInnerHTML)
  }
}



document.querySelectorAll(".bttn").addEventListener("click", function() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

});
