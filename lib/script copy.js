console.log("We're live!");

let allKeys = document.querySelectorAll('.letter');
//console.log(allKeys)
let inputField = document.querySelector('#input');
//console.log(inputField)


inputField.addEventListener('keydown', function(event) {   //function() just console.logs he function.  Like keyDown in ours
    console.log(event.key)  //event linedout because not used. key from number website.
    for (let i=0; i<allKeys.length; i++) {
        let keyValue = allKeys[i].attributes[1].value
        //console.log(allKeys[i].attributes[1].value); //attributes, not innerHTML or InnerText they are not tags, textContent works
        //console log to show you have correct, make variable keyValue with console.log value
        if (event.key === keyValue) {
            allKeys[i].classList.add('active')
        }
                
    }
    //console.log(keyValue) //not defined put for loop into function
})
inputField.addEventListener('keyup', function(event) {   //function() just console.logs he function.  Like keyDown in ours
    console.log(event.key)  //event linedout because not used. key from number website.
    for (let i=0; i<allKeys.length; i++) {
        let keyValue = allKeys[i].attributes[1].value
        //console.log(allKeys[i].attributes[1].value); //attributes, not innerHTML or InnerText they are not tags, textContent works
        //console log to show you have correct, make variable keyValue with console.log value
        if (event.key === keyValue) {
            allKeys[i].classList.remove('active')
        }
                
    }
    //console.log(keyValue) //not defined put for loop into function
    //Bonus
    console.log(inputField.value.length); // gives full string
    if (inputField.value.length > 1) {
        inputField.value = '';
    }
})

