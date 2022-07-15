let adjust=document.getElementById("adjust");
let link=document.getElementById("link1");
let link2=document.getElementById("link2");
let link3=document.getElementById("link3");
let link4=document.getElementById("link4");
let link5=document.getElementById("link5");
let link6=document.getElementById("link6");
console.log(link6);
console.log(adjust);
let part3=document.querySelector(".part3");
let part4=document.querySelector(".part4");
let navright2=document.getElementById("nav-right2");
let navright=document.getElementById("navy");
console.log(navright);
console.log(navright2);


adjust.addEventListener("click",function(e){
e.preventDefault();
part3.classList.toggle("blackb");

})
adjust.addEventListener("click",e=>{
    part4.classList.toggle("blackc");
})
navright2.addEventListener("mouseenter",e=>{
    navright2.classList.toggle("navrighter");
})
navright.addEventListener("mouseenter",e=>{
    navright.classList.toggle("navyy");

})
