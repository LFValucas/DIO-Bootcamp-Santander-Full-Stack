function comparaNumeros(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado1 = document.getElementById('resultado');
    const soma = parseInt(num1) + parseInt(num2);
    if(num1 == '' && num2 == ''){
        resultado1.innerHTML = 'Nenhum número inserido';
    }
    else if(num1 == '' || num2 == ''){
        resultado1.innerHTML = 'Falta inserir mais um número';
    }
    if(num1 != '' && num2 != ''){
        if(num1 == num2){
            var texto1 = 'Os Valores são iguais';
        }
        if(num1 != num2){
            var texto1 = 'Os valores são diferentes';
        }
        if(soma > 20){
            var texto2 = 'A soma de '+num1+' com '+num2+' é maior que 20';
        }
        if(soma < 20){
            var texto2 = 'A soma de '+num1+' com '+num2+' é menor que 20';
        }

        resultado1.innerHTML = texto1+'</br>'+texto2;
    }
    
}