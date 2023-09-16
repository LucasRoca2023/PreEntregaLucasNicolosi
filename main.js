
const dolar = 738
const euro = 678 
const  real = 137
const uru = 16
const compra=0
alert("Hola que moneda estas buscado")
alert("Elija la moneda a comprar")

 const opcion=prompt("eliga la moneda a comprar\n1.Dolar \n2.Euro \n3.Real \n4.Uru")
 

 const montoIngresado = parseInt(prompt("Ingresa Monto a Comprar en AR$"))
 

     
 while(opcion ===Number && montoIngresado !=" " ){
    opcion = alert("elegista la opcion"+opcion)
  
 }

 switch(opcion){

    case "1":
        alert("Elegiste Dolar")
        montoIngresado     
        cotizar()
        
        break
        

    case "2":
        alert("Elegiste Euro")
        montoIngresado
        cotizar()
        break

    case "3":
        alert("Elegiste Real")
        montoIngresado
        cotizar()
        break
    
    case "4":
        alert("Elegiste Uru")
        montoIngresado
        cotizar()
        break    
     default:
        
        alert("Ingrese una opcion valida")
        break
        
        
     }
 
     
     
     function cotizar (){
        if(opcion==1){
            let compra= montoIngresado / dolar
            parseFloat(alert("compraste Dolar" + " " +compra.toFixed(2)))
            alert("Gracias por su compra")

        }else if (opcion==2){
            let compra= montoIngresado / euro
            parseFloat(alert("compraste Euro" + " " + compra.toFixed(2)))
            alert("Gracias por su compra")
        }else if(opcion==3){
            let compra= montoIngresado / real
            parseFloat(alert("compraste Real" + " " + compra.toFixed(2)))
            alert("Gracias por su compra")
        }else if(opcion==4){
            let compra= montoIngresado / uru
            parseFloat(alert("compraste Uru" + " " + compra.toFixed(2)))
            alert("Gracias por su compra")

        }
        

       
 
     }

    
 
    