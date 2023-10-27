function del(){
   var display= document.getElementById("display");
   display.value=display.value.toString().slice(0,-1);

}
function ac(){
    var display= document.getElementById("display");
    display.value='';
 
 }
 function evall(){
    var display= document.getElementById("display");
    display.value=eval(display.value);
 }
 function add(x){
    var display= document.getElementById("display");
    display.value+=x;
 }
 function add_plus(){
    var display= document.getElementById("display");
    display.value+='+';
 }
 function minus(){
    var display= document.getElementById("display");
    display.value+='-';
 }
 function multiply(){
    var display= document.getElementById("display");
    display.value+='*';
 }
 function divide(){
    var display= document.getElementById("display");
    display.value+='/';
 }
 function add00(){
    var display= document.getElementById("display");
    display.value+='00';
 }
 function addPoint(){
    var display= document.getElementById("display");
    display.value+='.';
 }



 