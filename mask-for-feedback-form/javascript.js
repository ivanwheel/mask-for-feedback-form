$(document).ready(function() {
		$("#phone").mask("+7 (999) 999 99 99");

	});

		function valid (form){
		var fail = false;
		var name = form.name.value;
		var phone = form.phone.value;
		var email = form.email.value;
		var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
		if (name == "" || name == " ")
			fail = "You did not enter your name!";
		else if (phone == "")
			fail = "You did not enter your phone number!";
		else if (adr_pattern.test(email) == false)
			fail = "You have incorrectly entered your mail!";

		if(fail) 
			alert(fail);
	}