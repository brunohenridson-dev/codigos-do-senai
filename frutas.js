const frutas = ["limao","maça","banana","uva","pera"];

const index = frutas.indexOf("maça");
if (index > -1){
    frutas.splice(index, 1)
};
frutas.push("abacate");
frutas.push("bergamota");
console.log(frutas[1]);
console.log(frutas);
