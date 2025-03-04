const correctPassword = "abcde";

function dictionaryAttack(username) {
    const dictionary = ["password", "12345", "letmein", "abcde", "qwerty"]; // Example dictionary
    for (let i = 0; i < dictionary.length; i++) {
        if (dictionary[i] === correctPassword) {
            return `Dictionary Attack Success! The password is: ${dictionary[i]}`;
        }
    }
    return "Dictionary Attack Failed: Password not found.";
}

function bruteForceAttack(username) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let attempts = 0;
    
    for (let i = 0; i < Math.pow(chars.length, 5); i++) {
        let password = '';
        let temp = i;
        for (let j = 0; j < 5; j++) {
            password += chars[temp % chars.length];
            temp = Math.floor(temp / chars.length);
        }
        
        attempts++;
        if (password === correctPassword) {
            return `Brute Force Attack Success! The password is: ${password} (Attempts: ${attempts})`;
        }
    }
    return "Brute Force Attack Failed: Password not found.";
}

function runAttack() {
    const username = document.getElementById("username").value;
    const attackType = document.querySelector('input[name="attack"]:checked')?.value;

    const resultDisplay = document.getElementById("attack-result");

    if (attackType === "Dictionary Attack") {
        resultDisplay.textContent = "Running Dictionary Attack...";
        setTimeout(() => {
            const result = dictionaryAttack(username);
            resultDisplay.textContent = result;
        }, 2000);  
    } else if (attackType === "Brute Force Attack") {
        resultDisplay.textContent = "Running Brute Force Attack...";
        setTimeout(() => {
            const result = bruteForceAttack(username);
            resultDisplay.textContent = result;
        }, 2000);  
    } else {
        alert("Please select an attack type.");
    }
}

function stopBruteForce() {
    alert("Brute Force Attack stopped.");
}
