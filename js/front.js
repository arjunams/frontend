	
console.log(aqwe)
	(function (window, document){
		
		const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";
		const URI_USERS = "https://jsonplaceholder.typicode.com/users";
		
		console.log('items');
		
		getPosts(URI_POSTS);
		getAutores(URI_POSTS);

	})(window, document);

	function getPosts(URI){
		$.getJSON(URI, function(data){

			let items = [];

			$.each(data, function(key,val)	{
				items.push(postDom(key,val));
			});

			console.log(items);

			$("<ul/>",{
				"class": "artigos",
				html: items.join("")
			}).appendTo(".artigos");
			



		});
	}

	function postDom(key,value){

		let now =date();
		let post =
				'<li class="artigo"> '+
					' <h3>'+value.title +'</h3>'+
					' <p>'+value.body +'</p>'+
					' <span>'+ now +'</span>'+
				'</li>';

		return post;		
	}
