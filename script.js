function changeSize() {
  let size = Math.floor(Math.random()* 200) + 100
  let border = Math.floor(Math.random()* 10) + 10
  let red1 = Math.floor(Math.random()* 255)
  let blue1 = Math.floor(Math.random()* 255)
  let green1 = Math.floor(Math.random()* 255)
  let red2 = Math.floor(Math.random()* 255)
  let blue2 = Math.floor(Math.random()* 255)
  let green2 = Math.floor(Math.random()* 255)
  document.querySelector("#box").style.height=size + "px"
  document.querySelector("#box").style.width=size + "px"
  document.querySelector("#box").style.border="solid "+ `rgb(${red2},${blue2},${green2})` + border + "px"
  document.querySelector("#box").style.backgroundColor=`rgb(${red1},${blue1},${green1})`
 
  

}