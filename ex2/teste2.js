// 1 -> transforma a string em um array de caracteres e converte para minuscular

let contarLetraA = (str) => {
    let contadorLetraA = 0;

    const chars = str.toLowerCase().split('');

    chars.forEach(caracter => {
        if (caracter === 'a') {
            contadorLetraA++
        }
    })
    console.log(contadorLetraA); // imprime o resultado
    return contadorLetraA;
}
// testes: 
contarLetraA('gremio'); // output esperado: 0
contarLetraA('sao paulo'); //output esperado: 2

