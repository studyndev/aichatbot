function doAdd(){
    //console.log('Add');
    let valueOne = Number(document.getElementById('Num1').value);
    let valueTwo = Number(document.getElementById('Num2').value);
    
    document.getElementById('Add').innerHTML = valueOne + valueTwo;
}

function doMul(){
    //console.log('Add');
    let valueOne = Number(document.getElementById('Num1').value);
    let valueTwo = Number(document.getElementById('Num2').value);
    
    document.getElementById('Mul').innerHTML = valueOne * valueTwo;
}

function doDiv(){
    //console.log('Add');
    let valueOne = Number(document.getElementById('Num1').value);
    let valueTwo = Number(document.getElementById('Num2').value);
    
    document.getElementById('Div').innerHTML = valueOne / valueTwo;
}

function doSub(){
    //console.log('Add');
    let valueOne = Number(document.getElementById('Num1').value);
    let valueTwo = Number(document.getElementById('Num2').value);
    
    document.getElementById('Sub').innerHTML = valueOne - valueTwo;
}

function clearAll(){
    //console.log('Add');
    document.getElementById('Num1').value = 0;
    document.getElementById('Num2').value = 0;
    
    document.getElementById('Sub').innerHTML = "";
    document.getElementById('Add').innerHTML = "";
    document.getElementById('Mul').innerHTML = "";
    document.getElementById('Div').innerHTML = "";
}