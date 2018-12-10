
function cadenas(){

  var cadena = document.formulario_caenas.caja_Texto.value.toUpperCase();;

  contadorV = 0;

  for (var i = 0; i < cadena.length; i++) {
    if(cadena.charAt(i) == 'A' || cadena.charAt(i) == 'E' ||
    cadena.charAt(i) == 'I' || cadena.charAt(i) == 'O' ||
    cadena.charAt(i) == 'U'){

      contadorV++;

    }
  }

  contadorC = 0;

  for (var i = 0; i < cadena.length; i++) {
    if(cadena.charAt(i) == 'B' || cadena.charAt(i) == 'C' ||
    cadena.charAt(i) == 'D'|| cadena.charAt(i) == 'F'||
    cadena.charAt(i) == 'G'|| cadena.charAt(i) == 'H'||
    cadena.charAt(i) == 'J'|| cadena.charAt(i) == 'K'||
    cadena.charAt(i) == 'L'|| cadena.charAt(i) == 'M'||
    cadena.charAt(i) == 'N'|| cadena.charAt(i) == 'Ñ'||
    cadena.charAt(i) == 'P'|| cadena.charAt(i) == 'Q'||
    cadena.charAt(i) == 'R'|| cadena.charAt(i) == 'S'||
    cadena.charAt(i) == 'T'|| cadena.charAt(i) == 'V'||
    cadena.charAt(i) == 'W'|| cadena.charAt(i) == 'X'||
    cadena.charAt(i) == 'Y'|| cadena.charAt(i) == 'Z'){

      contadorC++;

    }
  }

  var letras_usadas=" ";

  for (var i = 0; i < cadena.length; i++){
    if(letras_usadas.includes(cadena.charAt(i)) == false){

      var contadorR=0;

      for (var j = 0; j < cadena.length; j++) {
        if(cadena.charAt(i) == cadena.charAt(j)){
          contadorR++;
        }
      }
      letras_usadas+=cadena.charAt(i) + ":" + contadorR + "  ";

    }
  }
  document.formulario_caenas.caja_vocales.value = contadorV;
  document.formulario_caenas.caja_consonantes.value = contadorC;
  document.formulario_caenas.caja_repeticiones.value = letras_usadas;

}
