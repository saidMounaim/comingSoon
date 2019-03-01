$(document).ready(function () {
	

	$(document).on("submit", "#sendemail", function(e){
		e.preventDefault();

		var Data = $("#sendemail").serialize();
		var This = $("#sendemail")[0];

		$.ajax({

			method: 'POST',
			url: 'http://localhost.org/winner.ma/sendemail.php',
			data: Data,
			success: function() {
				This.reset();
				swal(
					  'Newsletter',
					  'Votre inscription à la newsletter de Winner a bien été prise en compte.',
					  'success'
					)
			}

		})

	})
})