const random =document.querySelector('#random');
const btun = document.querySelector('.btn');
const copy =document.querySelector('.cpy');


btun.addEventListener('click',function(){

    const chars= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    let pass = "";
    let lenght = 15 ;

    for(let i=0;i<lenght; i++){
        let randomgen =Math.floor(Math.random()*chars.length);
        pass+= chars[randomgen];
    }
    return random.innerHTML= pass;
});

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(random.innerHTML)
    alert('pass copied')
})

// //AzU$0cSZb4fjzqS
// 1rfgZrvLTlOC3yT