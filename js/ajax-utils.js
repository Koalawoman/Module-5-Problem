// IIFE
(function(global){

	// Set up a namespace for our utility
	var ajaxUtils = {};

	// Returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}

		else if (window.ActiveXObject) {
			// For very old browsers (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}

		// This situation probably will never happen anyway - 
		// appears in case that two of the previous objects are not available
		else {
			global.alert("Ajax is not supported!"); // Message will appear on window object
			return(null);
		}
	}

	// Makes an Ajax GET request to 'requestUrl'
	ajaxUtils.sendGetRequest = // Sending request to the server
		function(requestUrl, responseHandler) { // "requestUrl" - We need to know where to go to get request on the server
												// "responseHandler" is the function that is going to handle the results of what the server returns
			var request = getRequestObject();	// Going to get "new XMLHttpRequest()" object and saving it a local variable
			request.onreadystatechange = // Different stages in network communication between the browser and the server
				function() {
					handleResponse(request, responseHandler); // When server comes with a response this is the function that is going to get called
				};
				request.open("GET", requestUrl, true);
				request.send(null); // for POST only - line that executes the request and sends it to the server
		}; // ";" is needed because this is just an expressio of the function

	// Only calls user provided 'responseHandler'
	// function if response is ready
	// and not an error
	function handleResponse(request, responseHandler) {
		if ((request.readyState == 4) && // We want to make sure that there are 4 states in this request and that we are in the last state
			(request.status == 200)) {	 // Response status "200" = everything's fine and here comes your response
			responseHandler(request);	 // Only if those two conditions are true we can take the function and use the variable that the user provided
		}
	}

	// Expose utility to the global object
	global.$ajaxUtils = ajaxUtils;


})(window);





