const validateBtn = document.getElementById("validate-btn");
const inputString = document.getElementById("string-input");
const resultsMsg = document.getElementById("results-message");
const regex = /[^a-zA-Z0-9]/g;

const cleanInput = (input) => {
    const word = input.replace(regex,"");
    return word.toLowerCase();
}

const reverseInput = (input) => {
    return input.split("").reverse().join("");
}

const compareStrings = (input,word) => {
    return input===word; 
}

const validatePalindrome = () => {
    if(inputString.value===""){
        alert("Please insert a valid input.")
    } else {
        const cleanWord=cleanInput(inputString.value);
        const reversedWord =reverseInput(cleanWord);
        if(compareStrings(cleanWord,reversedWord)){
            resultsMsg.innerHTML = `${inputString.value} is a palindrome.`;
    }   else {
            resultsMsg.innerText = `${inputString.value} is not a palindrome.`;
    }
    }
    
}

validateBtn.addEventListener("click",validatePalindrome);