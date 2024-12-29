let ans=document.querySelector(".ans");
let answer=document.querySelector("#answer");
let DEL=document.querySelector("#DEL");
let AC=document.querySelector("#AC");
let dot=document.querySelector("#dot");
let divide=document.querySelector("#divide");
let seven=document.querySelector("#seven");
let eigth=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let plus=document.querySelector("#plus");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let minus=document.querySelector("#minus");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let three=document.querySelector("#three");
let multiply=document.querySelector("#multiply");
let double_zero=document.querySelector("#double_zero");
let zero=document.querySelector("#zero");
let equal=document.querySelector("#equal");
let display=document.getElementsByName("display");
display.value="";
answer.value="";

one.addEventListener("click",()=>{
    answer.value+="1";
});
two.addEventListener("click",()=>{
    answer.value+="2";
});
three.addEventListener("click",()=>{
    answer.value+="3";
});
four.addEventListener("click",()=>{
    answer.value+="4";
});
five.addEventListener("click",()=>{
    answer.value+="5";
});
six.addEventListener("click",()=>{
    answer.value+="6";
});
seven.addEventListener("click",()=>{
    answer.value+="7";
});
eight.addEventListener("click",()=>{
    answer.value+="8";
});
nine.addEventListener("click",()=>{
    answer.value+="9";
});
zero.addEventListener("click",()=>{
    answer.value+="0";
});
double_zero.addEventListener("click",()=>{
    answer.value+="00";
});
multiply.addEventListener("click",()=>{
    answer.value+="*";
});
divide.addEventListener("click",()=>{
    answer.value+="/";
});
plus.addEventListener("click",()=>{
    answer.value+="+";
});
minus.addEventListener("click",()=>{
    answer.value+="-";
});
AC.addEventListener("click",()=>{
    answer.value="";
});
DEL.addEventListener("click",()=>{
    answer.value=answer.value.toString().slice(0,-1);
});
dot.addEventListener("click",()=>{
    answer.value+=".";
});

equal.addEventListener("click",()=>{
    answer.value=eval(answer.value);
});