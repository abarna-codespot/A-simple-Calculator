function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
// Calculator mode (radian or degree)
let calculatorMode = 'rad';

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to evaluate expression using Math.js
function evaluateExpression(expr) {
    try {
        // Check if factorial is needed
        let hasFactorial = expr.includes('!');
        if (hasFactorial) {
            expr = expr.replace(/\!/g, ''); // Remove factorial symbol
        }
        
        // Replace custom operators with Math.js syntax
        expr = expr.replace(/x²/g, '^2');
        expr = expr.replace(/x³/g, '^3');
        expr = expr.replace(/x\^y/g, '^');
        
        // Set Math.js configuration for precision and angle mode
        math.config({
            precision: 15,
            trigonometry: calculatorMode
        });
        
        // Evaluate expression
        let result = math.evaluate(expr);
        
        // Apply factorial if needed
        if (hasFactorial) {
            result = factorial(result);
        }
        
        return result;
    } catch (error) {
        return 'Error';
    }
}

var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){//if output has a value
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else if(this.id=="mode"){
            // Toggle between radian and degree
            calculatorMode = calculatorMode === 'rad' ? 'deg' : 'rad';
            this.innerText = calculatorMode;
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=evaluateExpression(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
        
    });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}