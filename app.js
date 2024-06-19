function cal(){
    let x = new Number(document.getElementById("num1").value);
    let y = new Number(document.getElementById("num2").value);
    let toutput = document.getElementById("output"); 
    let operator = document.getElementById("operator").value;
    

    switch(operator){
        case "+":
            toutput.innerHTML ="Answer is "+(x+y);
            break;
        case "-":
            toutput.innerHTML ="Answer is "+(x-y);
            break;
        case "/":
            toutput.innerHTML ="Answer is "+(x/y);
            break;
        case "*":
            toutput.innerHTML ="Answer is "+(x*y);
            break;
        case "?":
            toutput.innerHTML = "Brother ehhh... What's that brother... ";
            break;
    }
}

