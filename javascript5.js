function verificarpizza() {
  const input = document.getElementById("meuInput");
  const numeroselecionado = input.value;
  const textarea = document.getElementById("caixa");

  if (numeroselecionado === "1") {
    textarea.value = "calma calabreso";
  } else if (numeroselecionado === "2") {
    textarea.value = "quatro queijos";
  } else if (numeroselecionado === "3") {
    textarea.value = "frango com catupiry";
  }
}
