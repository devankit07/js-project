function opencard(){
    const allelem = document.querySelectorAll('.elem');
const allfullelem = document.querySelectorAll('.fullelem');
const backbtn  = document.querySelectorAll('.fullelem .back');

allelem.forEach(function(elem){
    elem.addEventListener("click", function(){
        allfullelem[elem.id].style.display = "block";
    });
});

backbtn.forEach(function(back){
    back.addEventListener("click",function(){
        allfullelem[back.id].style.display = 'none';
    });
});
}

//opencard();



let form =document.querySelector('.alltask form');
let taskinput = document.querySelector('.addtask form input');
let taskdetailinput =document.querySelector('.addtask form textarea');

form.addEventListener("click",function(e){
    e.preventDefault()
})