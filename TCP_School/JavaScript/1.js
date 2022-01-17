function printDate(){
	
	document.getElementById("date").innerHTML=Date();
	
}

function pr(){
	
	var num=10;
	var str = "JavaScript";
	document.getElementById("result").innerHTML=num+str
	
}

function bl(){
	
	var firstNum = 10;
	var secondNum=11;
	document.getElementById("result").innerHTML=(firstNum==secondNum);
}

function sy(){
	var sym = Symbol("javascript");
	var symObj = Object(sym);
	
	document.getElementById("result").innerHTML=(typeof sym)+"<br>"+(typeof symObj)
}

function al(){
	var n = prompt("Message");
	alert(n);
}
