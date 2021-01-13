console.log("We're live!");

let key;

let keyInput=document.querySelector('#input');
keyInput.addEventListener('keydown', brightKey);

function brightKey(e) {
    key=e.key;
    
    
    console.log(key);
    let keyboardPosition; // temp variable to keeptrack of where the target element was taken
    for (let i=0; i<keyBoard.length; i++) {
        let elem = keyBoard[i].innerHTML;
        if (elem.innerText === key){
            keyboardPosition = i;  //changing it to target position
            break;
        }
        document.body.style.background = "violet"; // remove when code finished
    }    
    //add .active class to elem (append child?)
    //set the keyboard node to be the elem
    
    //if else to see if keyup or keydown
    //if keydown remove the active
}
let keyBoard = document.querySelectorAll('.letter');
document.addEventListener('keyup', function(e){ //want to make function be brightkey
    document.body.style.background="white"
})

//let element = keyBoard[2].innerHTML
console.log(keyBoard)



/*addEventListener("keydown", function(event) {
    if (event.keyBoard == 86)
      document.body.style.background = "violet";
  });
addEventListener("keyup", function(event) {
    if (event.keyBoard == 86)
      document.body.style.background = "";
  });
  */