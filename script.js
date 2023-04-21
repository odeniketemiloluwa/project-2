const light = document.getElementById("light")

light.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "rgb(221, 214, 114)";
   const x = document.querySelectorAll(".intro");
   const y = document.querySelectorAll(".btn")
   const sec1 = document.querySelector(".sec1")

  x.forEach(x => {
    x.style.color="black"
  })
  y.forEach(y=> {
    y.style.border="1px solid black"
  })
  document.getElementById("btn1").style.border="1px solid black";
  sec1.style = "border-right:1px solid black";
})
const dark = document.getElementById("dark")

dark.addEventListener("click" , ()=>{
    document.body.style.backgroundColor = "rgb(29, 28, 28)";
    const x = document.querySelectorAll(".intro");
    const y = document.querySelectorAll(".btn")
    const sec1 = document.querySelector(".sec1")
  x.forEach(x => {
    x.style.color="white"
  })
  y.forEach(y=> {
    y.style.border="1px solid white"
  })
  document.getElementById("btn1").style.border="1px solid white";
  sec1.style = "border-right:1px solid white";
})

const light1 = document.getElementById("light1")
light1.addEventListener("click" , ()=>{
    const x = document.querySelectorAll(".intro");
    const y = document.querySelectorAll(".btn")
    x.forEach(x => {
        x.style.color="black"
      })
      y.forEach(y=> {
        y.style.border="1px solid black"
      })
    document.body.style.backgroundColor = "rgb(221, 214, 114)";
})
const dark1 = document.getElementById("dark1")

dark1.addEventListener("click" , ()=>{
    const x = document.querySelectorAll(".intro");
    const y = document.querySelectorAll(".btn")
    x.forEach(x => {
        x.style.color="white"
      })
      y.forEach(y=> {
        y.style.border="1px solid white"
      })
    document.body.style.backgroundColor = "rgb(29, 28, 28)";
})

const menu = document.querySelector(".menu-bar")
const  btn = document.querySelector(".menu-btn")

btn.addEventListener("click" , ()=>{
    menu.classList.toggle("hidden")
})