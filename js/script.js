//console.log('script via body, document. getElementById ('n1"))

   function soma() {
    
    //Pegar os numeros dos inputs do HTML e converter para Float, pois sera possivel calcular os numeros inteiros e decimais e negativos.
    
    let numero1 = document.getElementById('n1').value;
    let numero2 = document.getElementById('n2').value;

    let resultado = parseInt (numero1) + parseInt (numero2)

    console.log(resultado);
    
   } 
    