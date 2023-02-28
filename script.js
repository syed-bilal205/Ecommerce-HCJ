const bar=document.getElementById('bar');
const nav =document.getElementById('navbar');
const close=document.getElementById('close')

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
// javascript for slider
let mainImg = document.getElementById('mainImg');
let smallImg=document.getElementsByClassName('smallImg')

smallImg[0].onclick=function(){
    mainImg.src=smallImg[0].src;
}

smallImg[1].onclick=function(){
    mainImg.src=smallImg[1].src;
}

smallImg[2].onclick= function(){
    mainImg.src=smallImg[2].src;
}

smallImg[3].onclick=function(){
    mainImg.src=smallImg[3].src;
}