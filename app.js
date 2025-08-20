let numeroSecreto;
let intentos=0;
let listanumeroSorteado= [];
let maximo=10;
//Alcance global

console.log(numeroSecreto);

//Asignación de texto a elemntos HTML
function asignarElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

//Verificar si se acerto la respuesta
function verificarIntento(){

    let numeroDeUsuario=parseInt(document.getElementById('entrada').value);
        //El usuario acerto
        if(numeroDeUsuario===numeroSecreto){
             asignarElemento('p',`Acertaste el número en:  ${intentos} ${(intentos===1)?'vez':'veces'}`);        
            document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarElemento('p', ' El número es menor');  }
        else{
            asignarElemento('p', 'El número es mayor '); }    
            intentos ++;
            limpiarCaja();}
return;
}

//Limpiar caja para facilitar acceso
function limpiarCaja(){
   document.querySelector('#entrada').value='';
}

//Generar número aleatorio 
function generaNumeroSecreto() {
    let numeroGenerado= Math. floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listanumeroSorteado);

//Si ya se superaron los intentos maximos disponibles
    if(listanumeroSorteado.length==maximo){
     asignarElemento("p", "Ya se sortearon todos los números posibles");

    }else{
    //Si el número ya es parte de la lista
    if (listanumeroSorteado.includes(numeroGenerado) ){
       return generaNumeroSecreto();
        //Uso de recursivida de funciones  
        //limite de intentos soluciona el problema de la recursividad 


    }else{
        //Si el número no es parte de la lista
        listanumeroSorteado.push(numeroGenerado);
        return numeroGenerado;

    }
    }}

//Condiciones iniciales de juego
function condicionesIniciales(){
asignarElemento("h1", "Juego nuevo 2.0");
asignarElemento("p", `Indica un numero del 1 al ${maximo}`);
numeroSecreto=generaNumeroSecreto();
intentos=1;
}       


//Intentar de nuevo el juego
function reiniciarJuego(){
    limpiarCaja();
    //Indicar mensaje de intevalo de número
    //Generar número aleatorio
    //Inicializar Número de intentos
    condicionesIniciales(); 
    //Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');

}
condicionesIniciales();

