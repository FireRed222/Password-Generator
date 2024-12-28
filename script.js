let randomPassword = () => {
    let displayPassword = document.querySelector("#displayPassword");
    let passwordLength = +document.querySelector("#passwordLength").value;
    let error = document.querySelector("#error");

    let password = "";
    let letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+{}:;[]<>?,./~|";
    
    if (passwordLength === 0) {
        error.innerHTML = "Please select the password's length";
        error.style.color = "red";
    }
    
    for (let i = 0; i < passwordLength; i++) {
        password = password + letters[Math.floor(Math.random() * letters.length)];
    }
    
    displayPassword.value = password;

    setTimeout(() => {
        error.innerHTML = "";
    }, 3000);
}