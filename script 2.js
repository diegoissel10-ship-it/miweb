function login() {

 const user = document.getElementById('usuario'). value;

if (user==="usuario") {

document.getElementById('ingreso').style.display ='none';

document.getElementById('tapa').style.display='none';

} else {

 alert("Usuario incorrecto");

}



}

function Galeria() {



document.getElementById("Galeria").style.display='block';

document.getElementById("Historia").style.display='none';

document.getElementById("Contacto").style.display='none';



}



function Historia() {



document.getElementById("Historia").style.display='block';

document.getElementById("Galeria").style.display='none';

document.getElementById ("Contacto").style.display='none';

}



function Contacto() {



document.getElementById("Contacto").style.display='block';

document.getElementById("Historia").style.display='none';

document.getElementById ("Galeria").style.display='none';

}


