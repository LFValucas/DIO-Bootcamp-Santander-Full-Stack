function filtraPares(arr){

    return arr.filter(verificaPar);

    function verificaPar(item){
        return item % 2 === 0;
    }

}

meuarray = [1, 2, 3, 4, 5];

console.log(filtraPares(meuarray));


/*
function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));
*/