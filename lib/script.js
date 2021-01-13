console.log("We're live!");

let key;

let keyInput=document.querySelector('#input');
keyInput.addEventListener('keydown', brightKey);

function brightKey(e) {
    key=e.key;
    
    console.log(key);

    for (let i=0; i<keyBoard.length; i++) {
        let elem = keyBoard[i].innerHTML;
        if (elem = key)
        document.body.style.background = "violet";
    }    
}
let keyBoard = document.querySelectorAll('.letter');
document.addEventListener('keyup', function(e){
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