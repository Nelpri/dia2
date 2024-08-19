  
 function iniciarPreguntas(){
   // Solicita al usuario su nombre
   let nombre = prompt("Cuál es tu nombre?");
   
   // Solicita al usuario su edad
   let edad = prompt("Cuántos años tienes?");
   
   // Solicita al usuario el lenguaje de programación que está estudiando
   let lenguaje = prompt("Qué lenguaje de programación estás estudiando?");
   
   // Muestra el mensaje personalizado
   let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estas aprendiendo ${lenguaje}!`;
   document.getElementById("mensaje").textContent = mensaje;
   
   //Pregunta si le gusta estudiar el languaje
   let gusto = prompt(`Te gusta estudiar ${lenguaje}? Responde con el numero 1 para Si o 2 para No.`);
   
   //muestra el mensaje dependiendo de la respuesta
   if (gusto === "1") {
       alert("¡Muy bien! Sigue estudiando y tendras mucho éxito");
   
   } else if (gusto === "2"){
      alert("Oh, que pena... ya intentaste aprender otros lenguajes?");
      
     } else {
       alert("Respuesta no valida. Por favor responde con 1 o 2.");
      
    }
   }