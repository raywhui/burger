$('.submit').on('click', function(){
	var burgerName = {
		burger_name: $('textarea').val().trim()
	};
	console.log(burgerName);
	console.log(burgerName.burger_name);

	$.post('api/burgers', burgerName).then(function(){
		location.reload();
	});
});

$('ul').on('click', '.devour', function(){
	// $(this).data() already an object, sends as is
	console.log($(this).data());

	$.ajax('api/burgers',{
		type:'PUT',
		data: $(this).data()
	}).then(function(){
		location.reload();
	});
});

