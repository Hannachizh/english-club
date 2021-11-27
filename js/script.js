var burger = document.querySelector('.burger');
var menuList = document.querySelector('.menu');
var closeBtn = document.querySelector('#close');

burger.onclick = function(){
    menuList.classList.add('show');
}

closeBtn.onclick = function(){
    menuList.classList.remove('show');
}