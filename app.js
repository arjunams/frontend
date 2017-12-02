

	let btn_sum = document.querySelector('#btn-sum');
	let btn_minus = document.querySelector('#btn-minus');
	let btn_multi = document.querySelector('#btn-multi');
	let btn_divi = document.querySelector('#btn-divi');
	let primeiroValor = document.querySelector('#valor1');
	let segundoValor = document.querySelector('#valor2');

	//btn_sum.addEventListener('click', function(){
	btn_sum.addEventListener('click', () => {
		//let primeiroValor = document.querySelector('#valor1').value;
		//let segundoValor = document.querySelector('#valor2').value;

		console.log(soma(parseInt(primeiroValor.value), parseInt(segundoValor.value)) );


		
		
		
	});

	function soma(var1,var2){
		if ( 'number' == typeof var1 || 'number' == typeof var2)  {
			return "Resultado "+var1+" + "+var2+" = "+(var1+var2);
		}else{
	   		console.log('Digite um valor numérico para os dois campos');
		};					
	}

	
/*
	function soma(var1,var2){
		if ( 'number' == typeof var1 || 'number' == typeof var2)  {
				return "Resultado "+var1+" - "+var2+" = "+(var1-var2);

			}else{
			   console.log('Digite um valor numérico para os dois campos');
			};					
		}
		
	};	

	function menos(var1,var2){
		if ( 'number' == typeof var1 || 'number' == typeof var2)  {
				return "Resultado "+var1+" - "+var2+" = "+(var1-var2);

			}else{
			   console.log('Digite um valor numérico para os dois campos');
			};					
		}
		
	};	

	function divi(var1,var2){
		
		if ( 'number' == typeof var1 || 'number' == typeof var2)  {
				return "Resultado "+var1+" / "+var2+" = "+(var1/var2);

			}else{
			   console.log('Digite um valor numérico para os dois campos');
			};					
		}
	};	

	function multi(var1,var2){
		if ( 'number' == typeof var1 || 'number' == typeof var2)  {
				return "Resultado "+var1+" * "+var2+" = "+(var1*var2);

			}else{
			   console.log('Digite um valor numérico para os dois campos');
			};					
		}
		
	};
*/