
function displayUser(json)
{
$("#user-info").show();
$("#name").text(json.name);
$("#email").text(json.email);
}

function displayPosts(argument) {
	$("#allPosts").show();
	// var posts=JSON.parse(argument);
	
	for(var post in argument)
	{
	$("#allPosts").append($('<h2 class="post">').text(argument[post].title));
	$("#allPosts").append($('<p class="post">').text(argument[post].body));
	$("#allPosts").append($('<button class="comment"  value="'+argument[post].id+'">').text('Comment...'));

	}



}
	function  displayComments(argument)
	{
		$("#allcomments").show();
		for(var comment in argument)
	{

	$("#allcomments").append($('<p class="post">').text(argument[comment].body));


	}
		
	}

$(function()
{
	$("#user-info").hide();
	$("#formSubmit").submit(function(e){
	var userId=$("#userId").val();
	

	// alert(userId);
	// $("#getuser").click(function(){
	fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  .then(response => response.json()) //	return response.json();
  .then(json => displayUser(json))
  e.preventDefault();

});
$("#getposts").click(function(){
	$("#allPosts").hide();
	var userId=$("#userId").val();
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(json => displayPosts(json))
  	});


$(document).on('click','.comment',function(){
	$("#allcomments").hide();
	var postId=$(".comment").val();
	
	fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  .then(response => response.json())
  .then(json => displayComments(json))
  	});

$("#getcomments").click(function(){
fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  .then(response => response.json())
  .then(json => console.log(json))
  	});
})	