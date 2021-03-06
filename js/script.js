
    
    function ingresoPersonal() {
        let edad = document.getElementById("edad").value;
        
           if(edad  < 80  && edad > 18){
            swal({
                title: "Acceso Garantizado!",
              });
           }  
           else if(edad < 18 ||  edad > 80 || edad === ""){
            swal({
              title: "No es posible el acceso!",
           });
         }
         else{}
        }


    function ingresoFemenino() {

        

        if( document.getElementById("ladiesNigth").checked ){
            swal({
                title: "Las chicas no pagan!",
              });
        }
    }
    function generos() {
        if( document.getElementById("genero1").innerHTML){
        swal({
            title: "Pagas 25.000!",
          });
        }
      
        if ( document.getElementById("genero2").innerHTML);
            swal({
                title: "Pagas 30.000!",
              }); 
            }         
        

    
    function validarCampos() {
        let array =[documento, nombres, apellidos, edad, telefono, email, acompañantes]
          documento = document.getElementById("documento").value;
          nombres = document.getElementById("nombre").value;
          apellidos = document.getElementById("apellido").value;
          edad = document.getElementById("edad").value;
          email = document.getElementById("email").value; 
          telefono = document.getElementById("telefono").value;
          acompañantes = document.getElementById("documento").value;

          if(i === ""){

         // if (documento === ""|| nombres === ""|| apellidos === ""||edad === ""||email === ""||telefono===""||acompañantes===""){
            swal({
                title: "Debe llenar todos los campos",
              });
              return false;
              
          }

    }
    