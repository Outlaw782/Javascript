$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value; //whatever we type in is assigned to username
		
		// Make request to Github with credientals. (makes our call)
		$.ajax({
			url:'https://api.github.com/users/'+username,
			data:{
				client_id:'d5ffc33cc8245447304c',
				client_secret:'89c0e6eba146b012a3e3e30bc538e1fee6a6cc09'
				//if you dont register app with github, you can only send 50 request per hour
				//client_id and secret is our hashed id & password to prove that we registered our app
				// for unlimited access.
			}
		}).done(function(user){ //gives us back our user object. Once call is done, it calls back with below information
		$.ajax({
			url:'https://api.github.com/users/'+username+'/repos',
			
				data:{
				client_id:'d5ffc33cc8245447304c',
				client_secret:'89c0e6eba146b012a3e3e30bc538e1fee6a6cc09',
				sort: 'created: asc', //sort our repos
				per_page: 5
				}
		}).done(function(repos){//gives us back our repo object. Once call is done, it calls back with below information
			$.each(repos, function(index, repo){
			$('#repos').append(`
			<div class="alert alert-danger">
				<div class="row">
					<div class="col-md-7">
					<strong>${repo.name}</strong>: ${repo.description}
					</div>
				</div>
				
				<di	v class="row">
					<div class="col-md-3">
						<span class="badge badge-danger">Forks: ${repo.forks_count}</span>
						<span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
						<span class="badge badge-success">Stars: ${repo.stargazers_count}</span>	
					</div>
				</div>
				
				<div class="row">
					<div class="col-md-2">
					<a href="${repo.html_url}" target="_blank" class="btn btn-danger">Repo Page</a>
					</div>
				</div>				
				
			</div>
			`); //keep adding to our loop
			});	
		});
			$('#profile').html(`
			<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">${user.name}</h3>
					</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-3">
							<img class="thumbnail avatar" src="${user.avatar_url}">
						
						<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
						</div>
						<div class="col-md-9">
						<span class="badge badge-default">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success">Followers: ${user.followers}</span>
						<span class="badge badge-info">Following: ${user.following}</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company}</li>
							<li class="list-group-item">Website/blog: ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Since: ${user.created_at}</li>
						</ul>
						</div>
					</div>
				</div>
			</div>
			<h3 class="page-header"><Latest Repos></h3>
			<div id="repos"></div>
			
			
			`);
		});
	});
});