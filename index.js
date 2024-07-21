var offer=document.getElementById("offer")
offer.addEventListener("click",function(){
    offer.style.display="none"
})
var side=document.getElementById("side-nav")
var menu=document.getElementById("menu")
var close=document.getElementById("close")
menu.addEventListener("click",function(){
    side.style.left=0
})
close.addEventListener("click",function(){
    side.style.left="-50%";
})