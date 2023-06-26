//the optimized code with added comments
// Helper function to get DOM element by ID
function getElement(id) {
	return document.getElementById(id);
  }
  
  // Get the history value from the DOM
  function getHistory() {
	return getElement("history-value").innerText;
  }
  
  // Print the history value to the DOM
  function printHistory(num) {
	getElement("history-value").innerText = num;
  }
  
  // Get the output value from the DOM
  function getOutput() {
	return getElement("output-value").innerText;
  }
  
  // Print the output value to the DOM
  function printOutput(num) {
	if (num === "") {
	  getElement("output-value").innerText = num;
	} else {
	  getElement("output-value").innerText = getFormattedNumber(num);
	}
  }
  
  // Format the number with commas for better readability
  function getFormattedNumber(num) {
	if (num === "-") {
	  return "";
	}
	return Number(num).toLocaleString("en");
  }
  
  // Remove commas from the number to perform calculations
  function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ""));
  }
  
  // Operator button event listener
  var operatorButtons = document.getElementsByClassName("operator");
  for (var i = 0; i < operatorButtons.length; i++) {
	operatorButtons[i].addEventListener("click", function () {
	  var output = getOutput();
	  var history = getHistory();
  
	  if (this.id === "clear") {
		// Clear the history and output
		printHistory("");
		printOutput("");
	  } else if (this.id === "backspace") {
		// Remove the last character from the output
		output = reverseNumberFormat(output).toString();
		output = output.substr(0, output.length - 1);
		printOutput(output);
	  } else {
		// Perform calculations
		if (output !== "" || history !== "") {
		  output = output === "" ? output : reverseNumberFormat(output);
		  history += output;
  
		  if (this.id === "=") {
			// Evaluate the history expression and display the result
			var result = eval(history);
			printOutput(result);
			printHistory("");
		  } else {
			// Append the operator to the history
			history += this.id;
			printHistory(history);
			printOutput("");
		  }
		}
	  }
	});
  }
  
  // Number button event listener
  var numberButtons = document.getElementsByClassName("number");
  for (var i = 0; i < numberButtons.length; i++) {
	numberButtons[i].addEventListener("click", function () {
	  var output = reverseNumberFormat(getOutput());
	  if (!isNaN(output)) {
		// Append the number to the output
		output += this.id;
		printOutput(output);
	  }
	});
  }
  