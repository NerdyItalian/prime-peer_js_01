var value = 42;

if(value >= 53){
	value = value + 42;
} else {
	value = value - 13;
};

console.log(value);

var stepThree = "11";
var value = value + stepThree;

console.log(value);

var i = 0
var stepFour = [];

for(i = 0; i < value.length; i++){
	stepFour.push(value.charAt(i));
};

console.log(stepFour);

stepFour.shift(0);
stepFour.pop(2);

console.log(stepFour);

var stepSix = "";

for(i = (stepFour.length - 1); i >= 0; i--){
	console.log(i);
	stepSix += stepFour[i];
}

console.log(stepSix);

value = parseInt(value);
stepSix = parseInt(stepSix);

console.log(value);
console.log(stepSix);


value = value + stepSix;

console.log(value);

if(value < 60){
	value = 14;
}
else if(value == 2930) {
	value = 27;
}
else{
	value = 2;
};

console.log(value);

var n = 10;

while( n > 0) {
	value = value +1; 
	n--; 
}
console.log(value);


value = value.toString();

function stepEleven(val) { 
	
	if( val.length > 1){ 

		val = val.substring(1);

	}
	return val;

};

value = stepEleven(value);

console.log(value);






