const elem = document.querySelectorAll(".elem")
// const elemimage =document.querySelector("#box1 img");

// box1.addEventListener("mousemove",function(dets){
//     elemimage.style.top = dets.y +"px"
//     elemimage.style.left = dets.x +"px"
// })

// box1.addEventListener("mouseenter",function(){
//     elemimage.style.opacity = 1  
// })

// box1.addEventListener("mouseleave",function(){
//     elemimage.style.opacity = 0
// })

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave",function(){
          val.childNodes[3].style.opacity = 0
    })
     val.addEventListener("mousemove",function(dets){
          val.childNodes[3].style.left  =dets.x + "px"
          val.childNodes[3].style.top  = dets.y + "px"

    })
})


