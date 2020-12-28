var numOne = +prompt('Введите 1-ое число ')
var numTwo = +prompt('Введите 2-ое число ')
var numThree = +prompt('Введите 3-е число ')

if (numOne > numTwo && numOne < numThree , numOne > numThree && numOne < numTwo){
    alert(numOne)
}
else if (numTwo > numOne && numTwo < numThree , numTwo < numOne && numOne > numThree){
    alert(numTwo)
}
else if ( numThree > numOne && numThree < numTwo , numThree < numOne && numThree > numTwo){
    alert(numThree)
} else if ( isNaN(numOne),  isNaN(numTwo)  ,isNaN (numThree)  ) {
    alert('Вы ввели не число')
} else if(numOne=isNaN){
    alert('Первое число не число')
 } else if(numTwo=isNaN) {
    alert('Второе число не число')
 } else if(numThree=isNaN){
    alert('Третье число не число')
 }