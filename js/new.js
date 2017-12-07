	$.ajax({
		url: "https://jsonplaceholder.typicode.com/comments",
		method: "GET",
		success: function(data){



			console.log('Name :'+ data[0].name+ '; E-mail :'+ data[0].email);
			console.log('Name :'+ data[data.length-1].name+ '; E-mail :'+ data[data.length-1].email);
			//console.log(data);

		}
		
	});