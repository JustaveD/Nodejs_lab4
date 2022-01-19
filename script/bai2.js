const tool = document.querySelector(".tool")
const container = document.querySelector(".container");
const randomColor = ()=> "#" + (Math.floor(Math.random() * 16777215)).toString(16);

tool.addEventListener("click",function(){
    setTimeout(function(){
        container.style.backgroundColor=randomColor();
    },1000);
})