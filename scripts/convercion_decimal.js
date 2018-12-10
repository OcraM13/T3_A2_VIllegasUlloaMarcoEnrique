
function conversion(){

  var num = document.formulario_convercion.caja_decimal.value;

  document.formulario_convercion.caja_binario.value = parseFloat(num).toString(2);
  document.formulario_convercion.caja_octal.value = parseFloat(num).toString(8);
  document.formulario_convercion.caja_hexadecimal.value = parseFloat(num).toString(16).toUpperCase();

}
