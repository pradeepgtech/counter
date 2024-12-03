let count=0;
const incrementbtn=document.getElementById("incrementbtn")
const resetbtn=document.getElementById("resetbtn")
const decrementbtn=document.getElementById("decrementbtn")
const counter=document.getElementById("counter")

incrementbtn.onclick=function (){
    count++
    counter.textContent=count;
}
resetbtn.onclick=function (){
    count=0
    counter.textContent=count;
}

decrementbtn.onclick=function (){
    count--
    counter.textContent=count;
}