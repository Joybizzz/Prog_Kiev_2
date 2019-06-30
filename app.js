var number = prompt("Введите Число", " ");

if(number % 1 === 0){
	alert("Число Целое");
 if (number < 0){
	alert("<0");
}
else if(number > 0){
	alert(">0");
}
else if(number === 0){
	alert("=0");
}
else if(number === null){
	alert("Поле не было корректно заполнено")
}
}
if(number % 1 != 0){
	alert("Число Дробное");
 if (number < 0){
	alert("<0");
}
else if(number > 0){
	alert(">0");
}
else if(number === 0){
	alert("=0");
}
}