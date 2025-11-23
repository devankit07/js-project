var arr = [{
     dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
     story:"https://images.unsplash.com/photo-1760694533407-6a10714f3b65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1760645611765-a3df6c92bda3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
    story:"https://plus.unsplash.com/premium_photo-1763466939715-c2efc8499f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwbW9kZWxzfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1763244737839-220b4cd0259e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1596937098209-541d20a39ebd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdCUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1763162944506-ee1fbaf5a733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D"
},{
    dp:"https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHdvbWVufGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1763598925601-dae5e1c30ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
},{
    dp:"https://images.unsplash.com/photo-1579328064848-53fe6c665058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdvbWVufGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1763622480393-15d95319ce25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
},{
    dp:"https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D",
    story:"https://images.unsplash.com/photo-1763685805275-1845419c01a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"
}]

var clutter = ""
arr.forEach(function(elem,idx){
    clutter+= `<div class="story"> 
                    <img id=${idx}   src="${elem.dp}" alt="">
                </div>`
})
document.querySelector('#storiyan').innerHTML = clutter

document.querySelector('#storiyan').addEventListener("click",function(dets){
    document.querySelector('#full-screen').style.display = 'block'
    document.querySelector('#full-screen').style.backgroundImage =`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector('#full-screen').style.display = 'none'
    },2000)
})