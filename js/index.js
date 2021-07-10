insertValue = (n) => {
    let display = document.getElementById('calculatorDisplay').innerHTML;
    document.getElementById('calculatorDisplay').innerHTML = display + n;
}

clearDisplay = () => {
    document.getElementById('calculatorDisplay').innerHTML = " ";
}

calcValue = () => {
    let display = document.getElementById('calculatorDisplay').innerHTML;
    document.getElementById('calculatorDisplay').innerHTML = eval(display);
}

calcPercent = () => {
    let display = document.getElementById('calculatorDisplay').innerHTML;
    document.getElementById('calculatorDisplay').innerHTML = display/100;
}

reverseDisplay = () => {
    calcValue();
    let display = document.getElementById('calculatorDisplay').innerHTML;
    document.getElementById('calculatorDisplay').innerHTML = display * -1;
}