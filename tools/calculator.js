let mathFunctions = ["x&#178;", "x&#8319;", "&radic;", "&#8319;&#8730;x", "log", "e<sup>n</sup>", /* "pi" */ "&#x0028;", "&#x0029;", /*"<b>&#x002E;</b>",*/ /* "&#37;" */"Ans", "C", "&#9003", "&#x00F7;"];
let mathOperations = ["&#x0078;", "&#x002D;", "&#x002B;", "&#x003D;"];
let mathDigits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "<big><b>&#x002E;</b><big>", "0", "&pi;" /* "&#x003D;" */];

let funktions = document.getElementById("functions");
let nums = document.getElementById("numbers");
let operaxions = document.getElementById("operations");

for( let funktion of mathFunctions ){
	funktions.innerHTML = funktions.innerHTML + "<button class='button function'>"+funktion+"</button> ";
}
for( let operaxion of mathOperations ){
	operaxions.innerHTML = operations.innerHTML + "<button class='button operation'>"+operaxion+"</button>";
}
for( let dgt of mathDigits){
	nums.innerHTML = nums.innerHTML + "<button class='button number'>"+dgt+"</button>";
}