let dimensionDelArreglo:number=Number(prompt("Ingrese cuántos texto va a ingresar"));
let textoIngresado:string[]=new Array(dimensionDelArreglo);


function ingresandoTexto(arreglo:string[],)  {
  for (let index = 0; index < dimensionDelArreglo; index++) {
    textoIngresado[index]=(prompt("Ingrese texto para leer por consola"));
    
  }
}

ingresandoTexto(textoIngresado);

