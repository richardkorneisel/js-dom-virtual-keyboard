console.log("We're live!");

let key;

let keyBoard = document.querySelectorAll('.letter');
let keyInput=document.querySelector('#input');

keyInput.addEventListener('keydown', function(e) {
    console.log(e.key)

    for (let i=0; i<keyBoard.length; i++) {
        let elem = keyBoard[i].attributes[1].value //changed from innerHTML; to attributes[1].value, still need to better understand how to validate what I am doing as I go
        if (e.key === elem){
            keyBoard[i].classList.add('active')  //put i in brackets, added .classList.add('active')
        }
    }    
})

keyInput.addEventListener('keyup', function(e) {
    console.log(e.key)

    for (let i=0; i<keyBoard.length; i++) {
        let elem = keyBoard[i].attributes[1].value //changed from innerHTML; to attributes[1].value, still need to better understand how to validate what I am doing as I go
        if (e.key === elem){
            keyBoard[i].classList.remove('active')  //put i in brackets, added .classList.add('active')
        }
    }    
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