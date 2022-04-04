let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "W", "X", "Y", "Z", "!", "@", "£", "$", "%", "^", "(", ")"]

let passwordEl1 = document.querySelector("#password-el1")
let passwordEl2 = document.querySelector("#password-el2")
let passwordEl3 = document.querySelector("#password-el3")
let passwordEl4 = document.querySelector("#password-el4")
let inputEl = document.querySelector("#input-el") 


function generatePassword() {
    passwordEl1.textContent = "" 
    passwordEl2.textContent = "" 
    passwordEl3.textContent = "" 
    passwordEl4.textContent = "" 
    
    for (let i = 0; i < inputEl.value; i++) {
        randomStr1 = Math.floor(Math.random() * chars.length)
        randomStr2 = Math.floor(Math.random() * chars.length)
        randomStr3 = Math.floor(Math.random() * chars.length)
        randomStr4 = Math.floor(Math.random() * chars.length)
        
        passwordEl1.textContent += chars[randomStr1]
        passwordEl2.textContent += chars[randomStr2]
        passwordEl3.textContent += chars[randomStr3]
        passwordEl4.textContent += chars[randomStr4]
        
    }
    
}

