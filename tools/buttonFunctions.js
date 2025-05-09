let inputOutput = document.getElementById("inputOutput");
let buttons = document.querySelectorAll(".button");
let scope = {};
let cleanInput = "";
let input = "";
let results = "";

buttons.forEach(button=>{
	button.addEventListener('click', ()=>{
		let value = button.textContent;
		btnClick(value);
	})
})
function btnClick(data){
	if( input.length <= 30 ){
		if( data === buttons[23].textContent ){			//pi
			input += data;
			cleanInput += "pi";
			outPut(input);
		} else if( data === buttons[6].textContent ){	//bracket
			input += "(";
			cleanInput += "(";
			outPut(input);
		} else if( data === buttons[7].textContent ){	//bracket
			input += ")";
			cleanInput += ")";
			outPut(input);
		} else if( data === buttons[0].textContent ){	//square
			if (input.length > 0){
				let numToCalculate = lastNums(cleanInput);/* cleanInput.charAt(cleanInput.length - 1); */
				let preceedingNum = fisrtNums(cleanInput);
				scope.a = numToCalculate;
				input = input.slice(0, -1) + input.charAt(input.length - 1) + '^2';
				cleanInput = /* cleanInput.slice(0, -1) */preceedingNum + "square(a)";
				outPut(input);
			}
		} else if( data === buttons[2].textContent ){	//squareRoot
			if (input.length > 0){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput); /* cleanInput.charAt(cleanInput.length - 1); */
				let preceedingNum = fisrtNums(cleanInput);
				scope.b = numToCalculate ;
				input = input.slice(0, -1) + input.charAt(input.length - 1) + '^1/2';
				cleanInput = /* cleanInput.slice(0, -1) */preceedingNum + "sqrt(b)";
				outPut(input);
			}
		} else if( data === buttons[4].textContent ){	//log
			if (input.length > 0){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput);
				let preceedingNum = fisrtNums(cleanInput);
				scope.c = numToCalculate ;
				input = input.slice(0, -1) + input.charAt(input.length - 1) + 'log';
				cleanInput = preceedingNum + "log10(c)";
				outPut(input);
			}
		} else if( data === buttons[5].textContent ){	// e^n
			if (input.length > 0){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput);
				let preceedingNum = fisrtNums(cleanInput);
				scope.d = numToCalculate ;
				input = input.slice(0, -1) + input.charAt(input.length - 1) + 'e';
				cleanInput = preceedingNum + "exp(d)";
				outPut(input);
			}
		} else if( data === buttons[1].textContent ){	// n-power-1
			if (input.length > 0){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput);
				let preceedingNum = fisrtNums(cleanInput);
				/* scope.e = numToCalculate ; */
				input = input.slice(0, -1) + input.charAt(input.length - 1) + "^";
				cleanInput = preceedingNum + numToCalculate;
				outPut(input);
			}
		} else if( input.endsWith('^') ){				// n-power-2
			if ((input.length > 0) && (!isNaN(Number(data))) ){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput);
				let preceedingNum = fisrtNums(cleanInput);
				scope.e = numToCalculate ;
				scope.f = data
				input = input.slice(0, -1) + input.charAt(input.length - 1) + data;
				cleanInput = preceedingNum + "pow(e,f)";
				outPut(input);
			}
		} else if( data === buttons[3].textContent ){	// n-root-1
			if (input.length > 0){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput);
				let preceedingNum = fisrtNums(cleanInput);
				/* scope.e = numToCalculate ; */
				input = input.slice(0, -1) + input.charAt(input.length - 1) + "^1/(";
				cleanInput = preceedingNum + numToCalculate;
				outPut(input);
			}
		} else if( input.endsWith('1/(') ){				// n-root-2
			if ((input.length > 0) && (!isNaN(Number(data))) ){
				/* let num = ; */
				let numToCalculate = lastNums(cleanInput);
				let preceedingNum = fisrtNums(cleanInput);
				scope.e = numToCalculate ;
				scope.f = data
				input = input.slice(0, -1) + input.charAt(input.length - 1) + data + ")";
				cleanInput = preceedingNum + "nthRoot(e,f)";
				outPut(input);
			}
		} else if( data === buttons[9].textContent ){	// C
			input = "";
			cleanInput = "";
			results = "";
			outPut("|");
		} else if( data === buttons[10].textContent ){	// del
			if(input.length > 0 ){
				input = input.slice(0, -1);
				cleanInput = cleanInput.slice(0, -1);
				outPut(input);
				if( input.length === 0 ){
					outPut("|");
				}
			}
		} else if( data === buttons[8].textContent ){	//Ans
			input += results;
			cleanInput += results;
			outPut(input);
			if(results.length === 0){
				outPut("|");
			}
		} else if( data === buttons[11].textContent ){	//(div)
			input += data;
			cleanInput += "/";
			outPut(input);
		} else if( data === buttons[24].textContent ){	//(x)
			input += data;
			cleanInput += "*";
			outPut(input);
		} else if ( data === buttons[27].textContent ){	// (=)
			if ( cleanInput.length > 0 ){
				try{
					results = math.evaluate(cleanInput, scope);
					outPut(results);
					input = "";
					cleanInput = "";
				} catch{
					outPut("math error");
					input = "";
					cleanInput = "";
					results = "";
				}
			}
		} else {
			input += data;
			cleanInput += data;
			outPut(input);
		}
		console.log(input);
		console.log(cleanInput);
	}
}
function outPut( data ){
	inputOutput.innerText = data;
}
function lastNums( string ){
	let limiter = math.max(
		string.lastIndexOf('+'),
		string.lastIndexOf('-'),
		string.lastIndexOf('*'),
		string.lastIndexOf('/'),
	)
	return string.slice(limiter + 1);
}
function fisrtNums( string ){
	let limiter = math.max(
		string.lastIndexOf('+'),
		string.lastIndexOf('-'),
		string.lastIndexOf('*'),
		string.lastIndexOf('/'),
	)
	return string.slice(0, limiter + 1);
}