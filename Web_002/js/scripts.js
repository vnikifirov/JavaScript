'use strict';

//        Assembly Info
// Date: 28-Apr-17 and 29-Apr-17. 
// Athour: Vadim Nikiforov.
// E-mail: nikfovadim@yandex.com

//  JavaScript EC6
//  Subject: Task #1.
//  Description: Write name in a document.
let writeLine = (userName) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`Hello ${userName}`));
    document.querySelector('#content > ul').appendChild(li);
};

//  JavaScript EC6
//  Subject: Task #2.
//  Description: Calculating a sum of numbers.
let sumNumbers = (start, end, step, condition) => {
    let result = 0;
    let message = '';

    if (!isNaN(condition)) {
        for (let i = start; i < end; i += step) {

            if ((i % condition) === 0) {
                result += i;
            }
        }

        message = `The sum numbers divided by 5 is ${result}`;        
    } else {
        for (let i = start; i < end; i += step) {
            result += i;
        }

        message = `The sum of numbers is ${result}`;        
    }
    
    let li = document.createElement('li');    
    li.appendChild(document.createTextNode(message));
    document.querySelector('#content > ul').appendChild(li);
};

//  JavaScript EC6
//  Subject: Task #3.
//  Description: Write Date Time and after the message.
let writeCurrentlyDate = () => {
    let getDate = new Date();
    let currDate = `${getDate.getMonth() + 1} - 
                    ${getDate.getDate()} - 
                    ${getDate.getFullYear()}`;
    
    createListWithSubItem(`Пример 3`, currDate);
};

//  JavaScript EC6
//  Subject: Task #4.
//  Description: ...
let calcAge = (birthday) => {
    if (birthday.getMonth) {
        let currDate = new Date();

        let result = currDate.getFullYear() - birthday.getFullYear();        
        createListWithSubItem('Пример 5', `${result} years old.`);
    }
};

//  JavaScript EC6
//  Subject: Task #5.
//  Description: Write a currently day by Date object .
let writeCurrentlyDay = () => {
    let currdate = new Date();
    let message = 'Пример 4';
    let day = '';

    switch (currdate.getDay()) {
        case 0: day += "Monday"; break;
        case 1: day += "Tuesday"; break;
        case 2: day += "Wednesday"; break;
        case 3: day += "Thursday"; break;
        case 4: day += "Thursday"; break;
        case 5: day += "Friday"; break;
        case 6: day += "Saturday"; break;
        default: day += "undefined";
    }

    createListWithSubItem(message, day);
};

//  JavaScript EC6
//  Subject: Task #6.
//  Description: Write a string length by user input.
let writeLengthStr = () => {
    let userInput = prompt('Enter your message here: ', '');

    createListWithSubItem('Пример 6', `The length string is ${userInput.length}.`);
};

//  JavaScript EC6
//  Subject: Task #6.
//  Description: Display of the 10 phrases in the ordered list.
let writePhrases = () => {
    let userInputs = [];
    
    for (var i = 0; i < 10; i++) {        
        userInputs[i] = prompt(`Enter your ${( i + 1)} phrase.`);
    }

    createListWithSubItem('Пример 7', userInputs);
};

//  JavaScript EC6
//  Subject: Helper Function.
//  Description: Dispaly of each new item in HTML
let createListWithSubItem = (item, subitems) => {
    let subul = document.createElement('ol');
    let li = document.createElement('li');    

    li.appendChild(document.createTextNode(item));
    
    if (Array.isArray(subitems)) {
        for (let i = 0; i < subitems.length; i++) {
            let subli = document.createElement('li');            
            subli.appendChild(document.createTextNode(subitems[i]));
            subul.appendChild(subli);
            li.appendChild(subul);            
        }
    } else {        
        let subli = document.createElement('li');            
        subli.appendChild(document.createTextNode(subitems));
        subul.appendChild(subli);        
        li.appendChild(subul);
        subul.className = 'none-style';
    }

    document.querySelector('#content > ul').appendChild(li);
}