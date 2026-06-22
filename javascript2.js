function efetuaoperacao()
{
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let operador = document.getElementById("operador").value;

switch(operador)
{
case "+":
    resultado =num1 + num2;
    break;
case "-":
    resultado =num1 - num2;
    break;
case "*":
    resultado =num1 * num2;
    break;
case"/":
    resultado =num1 / num2;
    break;
default:
    resultado = "operador inválido"

}
document.getElementById("resultado").innerText = resultado;
}
