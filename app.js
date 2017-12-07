

	let btn_sum = document.querySelector('#btn-sum');
	let btn_minus = document.querySelector('#btn-minus');
	let btn_multi = document.querySelector('#btn-multi');
	let btn_divi = document.querySelector('#btn-divi');
	let btn_limpar = document.querySelector('#btn-limpar');
	let primeiroValor = document.querySelector('#valor1');
	let segundoValor = document.querySelector('#valor2');
	let resultado = document.querySelector('#resultadoOperacoes');

	btn_limpar.addEventListener('click', () => {
		document.querySelector('#valor1').value ='';
		document.querySelector('#valor2').value ='';

	});
	

	//btn_sum.addEventListener('click', function(){
	btn_sum.addEventListener('click', () => {
		//let primeiroValor = document.querySelector('#valor1').value;
		//let segundoValor = document.querySelector('#valor2').value;

		//console.log(parseInt(primeiroValor.value)+ parseInt(segundoValor.value) );
		soma(primeiroValor.value,segundoValor.value);
		
		
		
	});

	btn_minus.addEventListener('click', () => {
		//let primeiroValor = document.querySelector('#valor1').value;
		//let segundoValor = document.querySelector('#valor2').value;

		menos(primeiroValor.value,segundoValor.value);
	
		
		
	});

	btn_multi.addEventListener('click', () => {
		//let primeiroValor = document.querySelector('#valor1').value;
		//let segundoValor = document.querySelector('#valor2').value;

		multi(primeiroValor.value,segundoValor.value);
				
	});

	btn_divi.addEventListener('click', () => {
		//let primeiroValor = document.querySelector('#valor1').value;
		//let segundoValor = document.querySelector('#valor2').value;
		
		divi(primeiroValor.value,segundoValor.value);
	
	});



	function soma(var1,var2){

		
		if ((var1 === "") || (var2 === "")){
			window.alert('Digite um valor numérico para os dois campos');
		}else{
			resultado.innerHTML = (parseInt(var1)+parseInt(var2));
		}

		
						
	};

	function menos(var1,var2){

		if ((var1 == "") || (var2 == "")){
			window.alert('Digite um valor numérico para os dois campos');
		}else{
			resultado.innerHTML = (parseInt(var1)-parseInt(var2));
		}

		
						
	};

	function multi(var1,var2){

		if ((var1 == "") || (var2 == "")){
			window.alert('Digite um valor numérico para os dois campos');
		}else{
			resultado.innerHTML = (parseInt(var1)*parseInt(var2));
		}

		
						
	};

	function divi(var1,var2){

		if ((var1 == "") || (var2 == "")){
			window.alert('Digite um valor numérico para os dois campos');
		}else{
			resultado.innerHTML = (parseInt(var1)/parseInt(var2));
		}

		
						
	};


	
