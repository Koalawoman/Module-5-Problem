//This is my script.js file
//Button function


//Event handling

document.addEventListener("DOMContentLoaded",
	function(Event){

		//Unobstrusive event binding
		document.querySelector("button") //Attaching an event binding to the button
			.addEventListener("click", function(){ //When the button ic clicked this function will be executed

				//Call server to get the name
				$ajaxUtils





				

				// The problem is here!!!

					.sendGetRequest("data/name.txt", // Here the URL is provided
						function(request) {			  // A handler function that is going to have in it a response
													  // In JS a response is still called a "request"!!!
							var name = request.responseText;
							// Once the name is set we execute "querySelector"
							document.querySelector("#content") //In order for function to execute "document.querySelector" is supposed to be inside "$ajaxUtils" 
								.innerHTML = "<h2>Don't worry " + name + " the food is on the way";
						});
			});
	}

	);