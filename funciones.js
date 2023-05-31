          //Asignación constantes para la funcion calcular
            const cantidadEntradas = document.getElementById ("cantidadEntradas");
            const botonCalcular = document.getElementById ("botonCalcular");
            const tipoDescuento = document.getElementById ("inputState");
            const compraTotal = document.getElementById ("compraTotal");
            const precio = 200
          
            function calcular() {
          //prueba de las constantes por consola
            console.log(tipoDescuento.value);
            console.log(cantidadEntradas.value);
            
          //operación del calculo con porcentaje de descuento
            cantidadEntradas.value
            if (tipoDescuento.value == "estudiante" ) {
              resultado=(precio-(precio*0.8))*cantidadEntradas.value;
            } else if (tipoDescuento.value == "trainee" ) {
              resultado=(precio-(precio*0.5))*cantidadEntradas.value;
            } else {
              resultado=(precio-(precio*0.15))*cantidadEntradas.value;
            }         

          //impresión del cálculo 
            compraTotal.innerHTML = ("Total a pagar:  ")+resultado
            
            }

          //Asignación de constantes para la limpieza de formulario
            const nomBre = document.getElementById("nomBre")
            const aPellido = document.getElementById("aPellido")
            const e_mail = document.getElementById("e_mail")
            const botonLimpiar = document.getElementById ("botonLimpiar")
            
          // función de limpiar formulario
            
            function Limpiar() {
              nomBre.value = '';
              aPellido.value = '';
              e_mail.value = '';
              cantidadEntradas.value = '';
              compraTotal.innerHTML = ("Total a pagar:  ");
              }
            
            
  
              
              