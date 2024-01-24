const passwordBox = document.getElementById("password");
const lenght = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symble = "!@#$%^&*()_";
const allChar = upperCase + lowerCase + numbers + symble;

// The function for creating random password
function createPassword (){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symble[Math.floor(Math.random() * symble.length)];

    while(lenght> password.length){

        password += allChar[Math.floor(Math.random() * allChar.length)];
        
    }
    passwordBox.value = password;
}

//The function for copy password

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}

//Show alertBox

window.alert(copyPass());