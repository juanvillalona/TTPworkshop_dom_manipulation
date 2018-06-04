var username;
var password;
var email;

function verify() {
	//retrieve values from our input boxes
	username = document.getElementById("userName").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;

    //Check to see if values from the input boxes match our specifications
	if((password === "12345678") && (/\d/.test(username))) {
		document.getElementById("verifySay").innerHTML = "Good to go!";

	}

}

	




	




	//console.log(username);
