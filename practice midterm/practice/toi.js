/* <!-- Task 7: Write a JavaScript function that generates a random password of a specified 
length. Allow the user to choose whether to include uppercase letters, lowercase letters,
numbers, and special characters.

Task 8: Implement a JavaScript countdown timer that counts down from a specified time 
(e.g., 10 minutes) to zero. Display the remaining time on a webpage and execute a callback 
function when the countdown reaches zero. 

Task 14: Write a JavaScript function that accepts a string as input and returns the string reversed. 
For example, if the input is "hello", the output should be "olleh".--> */


/* Task 7 Soln 

-passwordGenerator - a function used to generate random numbers;
passwords consists of (5 imp parameters) : length, uppercase, lowercase letters, numbers and special characters.

- for generating the numbers - 2 variables required
1 - pool : will the the empty string used to store the generated passwords
2 - password : form the data from the holding data from the pool the final generated output

*/

function passwordGenerator(length, input){

    const characterSet = {

        uppercaseAlp: 'QWERTYUIOPLKJHGFDSAZXCVBNM',
        lowercaseAlp: 'qwertyuioplkjhgfdsazxcvbnm',
        numbers: '1234567890',
        specialCharacS: '¡€#¢∞§¶•ªº–≠!@£$%^&*()_+',

    };

    let pool = '';
    let password = '';

    for(const [INPUT, value] of Object.entries(input)){

        if (value && characterSet[INPUT]){
            pool += characterSet[INPUT];

        }
    }

    password = Array.from({length}, () => pool[Math.floor(Math.random() * pool.length)]).join('');

    return password;

    function Display() {
        const input = {

            uppercase : true,
            lowercase : true,
            numbers : true,
            specialChars : true,

        };

        const passwordLength = 12;
        const password = passwordGenerator(passLength, input);
        dcoument.getElementById("password").textContent = password;
        
    }






}




