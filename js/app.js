	(function (window, document){
	console.log("asd");
		
		const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";
		const URI_POSTS = "https://jsonplaceholder.typicode.com/users";
		
		getPosts(URI_POSTS);
		getAutores(URI_POSTS);

	})(window, document);

	function getPosts(URI){
		$.getJSON(URI, function(data){

			console.log(data.length);



		});
	}
