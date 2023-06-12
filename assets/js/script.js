//PARTE 1
function borderimg() {
    let image = document.getElementById("imgclick");
    if (image.style.border === "2px solid red") {
      image.style.border = "none";
    } else {
      image.style.border = "2px solid red";
    }
  }

//PARTE 2
function calcular(){
let chih1 = document.getElementById("chih1").value;
let chih2 = document.getElementById("chih2").value;
let chih3 = document.getElementById("chih3").value;

let resultado = Number(chih1) + Number(chih2) + Number(chih3);

if (resultado <= 10) {
    document.getElementById("infoTxt").innerHTML=
    "llevas " + resultado + " stickers"
    resultado;
   
} else {
  document.getElementById("infoTxt").innerHTML=
    "Llevas demasiados stickers ";
}
}

//PARTE 3
function ingresar(params) {
  let pas1 = document.querySelector("#pas1").value;
  let pas2 = document.querySelector("#pas2").value;
  let pas3 = document.querySelector("#pas3").value;
  
  if (pas1 === "9" && pas2 === "1" && pas3 ==="1") {
    document.getElementById("infoTxt2").innerHTML=
    "password 1 correcto";
  } else if (pas1 === "7" && pas2 === "1" && pas3 ==="4"){
    document.getElementById("infoTxt2").innerHTML=
    "password 2 es correcto";
  } else{
    document.getElementById("infoTxt2").innerHTML=
    "password incorrecto";
  }
  
}