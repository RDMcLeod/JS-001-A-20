const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*(()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {

    const length = lengthEl.value;
    let password = '';

    for(let i=0; i<length;i++){
        
        password += 
    }

    pwEl.innerText = password;
}

generateEl.addEventListener("click", generatePassword);
