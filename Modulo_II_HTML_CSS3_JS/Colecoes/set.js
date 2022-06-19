function uniqueElements(array) {
	let unique = new Set(array);
	return [unique];
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(arr));

let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add(4);
conjunto.add(4);
conjunto.add(5);

console.log(conjunto);
console.log(`Conjunto tem o número 5 :${conjunto.has(5)}`);