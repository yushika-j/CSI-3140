// <!-- Task 7: Write a JavaScript function that generates a random password of a specified 
//     length. Allow the user to choose whether to include uppercase letters, lowercase letters,
//      numbers, and special characters.

// Task 8: Implement a JavaScript countdown timer that counts down from a specified time 
// (e.g., 10 minutes) to zero. Display the remaining time on a webpage and execute a callback 
// function when the countdown reaches zero. 

// Task 14: Write a JavaScript function that accepts a string as input and returns the string 
// reversed. For example, if the input is "hello", the output should be "olleh".-->

function createPassword(number){
    const uppercase = window.prompt('Do you want to include uppercase letters? (yes/no)');
    const lowercase = window.prompt("Do you want to include lowercase letters? (yes/no)");
    const special = window.prompt("Do you want to include special characters? (yes/no)");
    let characterSet = '';
    if (uppercase ==='yes'){
        characterSet = characterSet + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(lowercase === 'yes'){
        characterSet = characterSet + 'abcdefghijklmnopqrstuvwxyz';
    }
    if(special === 'yes'){
        characterSet = characterSet + '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    let password = '';
    while (count <= number){
        password = password + characterSet[(Math.random() * characterSet.length())];
        number++;
    }
    document.writeln(password);
    return password;
}

function reverseString(string){
    let reversed = '';	
    for(var i; i === 0;i--){
        reversed += string.slice(i) ;
    }
    return reversed;
}
reverseString('ailo');
