var jugar = "";
i=1;
var contadorpuntos = 0;
palo = Array("&#9829","&#9830","&#9827",'&#9824') //♥ ♦ ♣ ♠
paloRandom=Math.floor(Math.random(0)*(4));
paloColor = Array("rojo", "negro");
colorRandom=Math.floor(Math.random(0)*(2));


alert("Por favor, utilize Mozilla firefox para este script.")

while(i<2){
   
    jugar = prompt("Deseas jugar?");
    if (jugar == "si") {
        if (paloColor[colorRandom] == "rojo") {
            cartablanca =Math.floor(Math.random() * 12) + 1; 
            console.log(cartablanca);
            cartajugador = Math.floor(Math.random() * 12) + 1; 
               
            document.write(`<div id =cartajugador>`)
         
            document.write(`<p class = palodecartaupr>${cartajugador} ${palo[paloRandom]}</p>`);

            document.write(`<p align ="center" class =cartasenelmedior>`)
            for (let i = 0; i < cartajugador; i++) {
      
                document.write(`${palo[paloRandom]} `)
                
            }
            document.write(`</p>`)
            document.write(`<p class = palodecartadownr>${cartajugador} ${palo[paloRandom]}</p>`)
            document.write(`</div>`);
            
        }else if(paloColor[colorRandom] == "negro"){

            cartablanca =Math.floor(Math.random() * 12) + 1; 
            console.log(cartablanca);
            cartajugador = Math.floor(Math.random() * 12) + 1; 
            document.write(`<div id =cartajugador>`)
            
         
            document.write(`<p class = palodecartaup>${cartajugador} ${palo[paloRandom]}</p>`);
            document.write(`<br>`)
            document.write(`<br>`)
            document.write(`<p align ="center" class =cartasenelmedio>`)
            for (let i = 0; i < cartajugador; i++) {
      
                document.write(`${palo[paloRandom]} `)
                
            }
            document.write(`</p>`)
            document.write(`<p class = palodecartadown>${cartajugador} ${palo[paloRandom]}</p>`)
            document.write(`</div>`);



        }
       

        deseas = prompt("Deseas jugar con la carta que te ha tocado?");
            if (deseas == "si") {
                mayoronmenor = prompt("Tu carta sera Mayor o menor?");
                    if (mayoronmenor == "mayor") {
                        if(cartajugador>cartablanca){
                            contadorpuntos = contadorpuntos + 1;
                            if (contadorpuntos<0) {
                                contadorpuntos = 0
                                
                            }
                            document.write(`<p id=puntuacion>La puntuacion del usuario es de ${contadorpuntos}</p>`);
                            document.write(`<p id=cartablanca>La carta blanca es ${cartablanca}</p>`)
                           
                        }else{
                            contadorpuntos = contadorpuntos - 1;
                            if (contadorpuntos<0) {
                                contadorpuntos = 0
                                
                            }
                            document.write(`<p id=puntuacion>La puntuacion del usuario es de ${contadorpuntos}</p>`);
                            document.write(`<p id=cartablanca>La carta blanca es ${cartablanca}</p>`)
                            if (contadorpuntos<0) {
                                contadorpuntos = 0
                                
                            }
                        }
                        
                
                }if(mayoronmenor == "menor"){
                    if(cartablanca>cartajugador){
                        contadorpuntos = contadorpuntos + 1;
                        if (contadorpuntos<0) {
                            contadorpuntos = 0
                            
                        }
                        document.write(`<p id=puntuacion>La puntuacion del usuario es de ${contadorpuntos}</p>`);
                        document.write(`<p id=cartablanca>La carta blanca es ${cartablanca}</p>`)
                       
                    }else {
                        contadorpuntos = contadorpuntos - 1;
                        if (contadorpuntos<0) {
                            contadorpuntos = 0
                            
                        }
                        document.write(`<p id=puntuacion>La puntuacion del usuario es de ${contadorpuntos}</p>`); 
                        document.write(`<p id=cartablanca>La carta blanca es ${cartablanca}</p>`) 
                      

                    }


                }
            }
           
                        }
                else if (jugar == "SALIR") {
                    break;
                }
        

            
               
       

       
       
}