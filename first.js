document.getElementById("frame").readOnly=true;
document.getElementById("frame").value;

var equal = document.getElementById('b=');
var seven = document.getElementById('b7').onclick=function() {
    document.getElementById("frame").value +=7;
}
var eight = document.getElementById('b8').onclick=function(){
    document.getElementById("frame").value +=8;
}
var nine = document.getElementById('b9').onclick=function(){
    document.getElementById("frame").value +=9;
}
var four = document.getElementById('b4').onclick=function(){
    document.getElementById("frame").value +=4;
}

var five = document.getElementById('b5').onclick=function(){
    document.getElementById("frame").value +=5;
}
var zero = document.getElementById('b0').onclick=function(){
    document.getElementById("frame").value +=0;
}
var six = document.getElementById('b6').onclick=function(){
    document.getElementById("frame").value +=6;
}
var one = document.getElementById('b1').onclick=function(){
    document.getElementById("frame").value +=1;
}
var two = document.getElementById('b2').onclick =function(){
    document.getElementById("frame").value +=2;
}
var three = document.getElementById('b3').onclick=function(){
    document.getElementById("frame").value +=3;
}
var multi = document.getElementById('bX').onclick= function(){
    const num1=document.getElementById("frame").value
    document.getElementById("frame").value= null;
    equal.onclick=function() {
    const num2=document.getElementById("frame").value;
    var c= Number(num1);
    var d= Number(num2);
   const f= c*d;
   document.getElementById("frame").value=f;
    }
}
var plus = document.getElementById('b+').onclick = function(){
    const num1=document.getElementById("frame").value
    document.getElementById("frame").value= null;
    equal.onclick=function() {
    const num2=document.getElementById("frame").value;
    var c= Number(num1);
    var d= Number(num2);
   const f= c+d;
   document.getElementById("frame").value=f;
   
    }
    
}
var clear = document.getElementById('bC').onclick=function(){
    document.getElementById("frame").value= null;
}
var divide = document.getElementById('b/').onclick=function(){
    const num1=document.getElementById("frame").value
    document.getElementById("frame").value= null;
    equal.onclick=function() {
    const num2=document.getElementById("frame").value;
    var c= Number(num1);
    var d= Number(num2);
   const f= c/d;
   document.getElementById("frame").value=f;
}
}
var subtract = document.getElementById('b--').onclick=function(){
    const num1=document.getElementById("frame").value
    document.getElementById("frame").value= null;
    equal.onclick=function() {
    const num2=document.getElementById("frame").value;
    var c= Number(num1);
    var d= Number(num2);
   const f= c-d;
   document.getElementById("frame").value=f;
}
}






