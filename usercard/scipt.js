const doctors = [
  {
    img: "https://plus.unsplash.com/premium_photo-1763265293425-f7ad17012b13?w=600&auto=format&fit=crop&q=60",
    name: "Alice Smith",
    post: "Neurosurgeon",
    fee: "$200/hr",
    intro: "I have over 4 years of experience in complex neurosurgeries."
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
    name: "Dr. John Doe",
    post: "Cardiologist",
    fee: "$180/hr",
    intro: "Specialized in heart health and preventive cardiology."
  },
  {
    img: "https://images.unsplash.com/photo-1588776814546-7f9b51c5d5b0?w=600&auto=format&fit=crop&q=60",
    name: "Dr. Maria Johnson",
    post: "Pediatrician",
    fee: "$150/hr",
    intro: "Dedicated to child healthcare with 6+ years of experience."
  },
  {
    img: "https://images.unsplash.com/photo-1612349318507-9e4f83f0a43d?w=600&auto=format&fit=crop&q=60",
    name: "Dr. David Lee",
    post: "Orthopedic Surgeon",
    fee: "$220/hr",
    intro: "Expert in bone and joint surgeries with 5+ years of practice."
  },
  {
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&auto=format&fit=crop&q=60",
    name: "Dr. Sarah Brown",
    post: "Dermatologist",
    fee: "$130/hr",
    intro: "Focused on skin health and cosmetic dermatology."
  }
];



let main = document.querySelector("main");
let sum = ''

doctors.forEach(function(elem){
    sum = sum + `<div class="main">
          <div class="user-card">
            <img src="${elem.img}" alt="" />
            <h2>${elem.name}</h2>
            <h3>${elem.post}</h3>
            <h4>${elem.fee}</h4>
            <p>${elem.intro}</p>
            <button>book</button>
        </div>
      </div>`
})

main.innerHTML = sum;