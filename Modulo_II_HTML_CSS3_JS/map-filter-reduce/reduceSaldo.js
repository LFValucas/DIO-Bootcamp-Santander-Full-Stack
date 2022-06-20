/*
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));
*/

function calculaSaldo(saldo, listas){
    const saldoFinal = listas.reduce((ant, item) => ant - item.preco, saldo);
    return saldoFinal;
}

lista = [
    {
        preco: 2.5,
        nome: 'laranja',
    },
    {
        preco: 5,
        nome: 'banana',
    },
    {
        preco: 49.50,
        nome: 'carne',
    },
];

const saldo = 100;

console.log(calculaSaldo(saldo, lista));