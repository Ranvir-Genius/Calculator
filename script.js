var n1="";
var n2="";
var x="";
var answer
var firstinput=true;
function one() {
    if (firstinput=true){
        n1=n1+1
        document.getElementById("num1").innerHTML=n1;
        firstinput=false;
    }
    else {
        n2=n2+1
        document.getElementById("num2").innerHTML=n2;
    }
}
function two() {
    if (firstinput=true){
        n1=n1+2
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+2
        document.getElementById("num2").innerHTML=n2;
    }
}
function three() {
    if (firstinput=true){
        n1=n1+3
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+3
        document.getElementById("num2").innerHTML=n2;
    }
}
function four() {
    if (firstinput=true){
        n1=n1+4
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+4
        document.getElementById("num2").innerHTML=n2;
    }
}
function five() {
    if (firstinput=true){
        n1=n1+5
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+5
        document.getElementById("num2").innerHTML=n2;
    }
}
function six() {
    if (firstinput=true){
        n1=n1+6
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+6
        document.getElementById("num2").innerHTML=n2;
    }
}
function seven() {
    if (firstinput=true){
        n1=n1+7
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+7
        document.getElementById("num2").innerHTML=n2;
    }
}
function eight() {
    if (firstinput=true){
        n1=n1+8
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+8
        document.getElementById("num2").innerHTML=n2;
    }
}
function nine() {
    if (firstinput=true){
        n1=n1+9
        document.getElementById("num1").innerHTML=n1
        firstinput=false
    }
    else {
        n2=n2+9
        document.getElementById("num2").innerHTML=n2;
    }
}
function zero() {
    if (firstinput=true){
        n1=n1+0
        document.getElementById("num1").innerHTML=n1;
        firstinput=false
    }
    else {
        n2=n2+0
        document.getElementById("num2").innerHTML=n2;
    }
}
function add() {
    answer=Number(document.getElementById("num1").value)+(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML=answer
}
function subtract() {
    answer=Number(document.getElementById("num1").value)-(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML=answer
}
function multiply() {
    answer=Number(document.getElementById("num1").value)*(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML=answer
}
function divide() {
    answer=Number(document.getElementById("num1").value)/(document.getElementById("num2").value);
    document.getElementById("answer").innerHTML=answer
}