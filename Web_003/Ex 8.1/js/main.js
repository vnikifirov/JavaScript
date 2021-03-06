'use strick';

let testField = function() {
    const input = document.querySelector('#testingField').value;
    if(input.length <= 0)
        alert('Поле пусто');
    else
       alert(input);
};

let swapingImg = function(images) {
    let iter = images.children.length;
    while(iter--) {
        images.appendChild(images.childNodes[iter]);
    }
};

let swapByClickBtn = function() {
    const images = document.querySelector('#swapingImgs div.images');
    swapingImg(images);
};

let swapByMauseOver = function() {
    const images = document.querySelector('#swapMauseOver div.images');
    swapingImg(images);
};

let isNumber = function(el) {
    return !isNaN(el) && isFinite(el) && (typeof(el) != 'string');
}

let isNumbers = function (args) {        
    return args.every(isNumber);
}

let addNumber = function() {
    const inputs = document.querySelectorAll('#addition > input');    

    try 
    {
        const valArr = (Array.apply(null, inputs))
                              .map(i => Number(i.value));

        if (!isNumbers(valArr))
            throw new Error('One of args is not a number!');
            
        const res = valArr.reduce((acc, num) =>  acc + num);
        alert(res);
    }
    catch (ex) 
    {
        alert(ex);
    }
}

let countLinks = function() {
    const linksOnPage = document.querySelectorAll('a');
    alert( linksOnPage.length);
}