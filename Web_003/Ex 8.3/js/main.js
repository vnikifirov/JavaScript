'use strict';

// Global variable
let newWin;    

let openWin = function() {
    newWin = window.open("./window.html", "New win", "width=300, height=300");             
}; 

let closeWindow = function(win) {                
    if ((typeof win === 'undefined') || (win.closed === true))
        alert("The window wasn't open");                
    else {
        win.close();   
        win = 'undefined';                          
    }    
};