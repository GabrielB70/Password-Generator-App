const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordButton = document.getElementById("btn")
let givenPassword = document.getElementById("password-el")

function generateButton() {
       let indexCharacterOne = Math.floor( Math.random() * characters.length ) 
       let indexCharacterTwo = Math.floor( Math.random() * characters.length )
       let indexCharacterThree = Math.floor( Math.random() * characters.length )
       let indexCharacterFour = Math.floor( Math.random() * characters.length )
       let indexCharacterFive = Math.floor( Math.random() * characters.length )
       let indexCharacterSix = Math.floor( Math.random() * characters.length )
       let indexCharacterSeven = Math.floor( Math.random() * characters.length )
       let indexCharacterEight = Math.floor( Math.random() * characters.length )
       let indexCharacterNine = Math.floor( Math.random() * characters.length )
       let indexCharacterTen = Math.floor( Math.random() * characters.length )
       let indexCharacterEleven = Math.floor( Math.random() * characters.length )
       return givenPassword.textContent = "New Password: " + characters[indexCharacterOne] + characters[indexCharacterTwo] + characters[indexCharacterThree] + characters[indexCharacterFour] + characters[indexCharacterFive] + characters[indexCharacterSix] + characters[indexCharacterSeven] + characters[indexCharacterEight] + characters[indexCharacterNine] + characters[indexCharacterTen] + characters[indexCharacterEleven] 
}


