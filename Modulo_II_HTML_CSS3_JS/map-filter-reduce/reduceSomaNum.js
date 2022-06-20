/*
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(somaNumeros([1, 1, 1, 3]));
*/

function somaTudo(arr){
	return arr.reduce(soma);
	function soma(anterior, posterior, index, arrayaqui){
		console.log(index);
		console.log(arrayaqui);
		return anterior + posterior;
	}
}

const meuarray = [2, 5, 7, 1];

console.log(somaTudo(meuarray));
