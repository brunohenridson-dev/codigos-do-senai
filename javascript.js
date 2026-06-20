function verifica()
{
    let nota = document.getElementById("nota").value;
    console.log("nota inserida:"),nota;
    if(nota>=7)
    {
let nota = document.getElementById("resultado").innerHTML = "aluno aprovado"
alert("aluno aprovado")
    }
    else{
let nota = document.getElementById("resultado").innerHTML = "aluno reprovado"
alert("aluno reprovado")
    }
}
