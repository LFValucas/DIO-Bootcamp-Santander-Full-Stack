function verificaPalindromo(string){
    if(!string) return "string inexistente";

    let texto1 = string.trim().split(" ").join("").toUpperCase();

    let texto2 = texto1.split("").reverse().join("").toUpperCase();

    return texto1 === texto2;
}

let myVar = "a Me o P    oe MA  "

console.log("É um palíndromo? "+verificaPalindromo(myVar));

