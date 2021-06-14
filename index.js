//Get the submit button
const submitBtn = $("button");

//get the names of the inputs
//see this stack overflow for
//https://stackoverflow.com/a/55496118/12882691
const q1Entry = "entry.1711443696";
const q2Entry = "entry.1064934008";
const q3Entry = "entry.1399388777";

submitBtn.click(e => {
	//don't go to the defualt action url
	e.preventDefault();

	//get the value of the form elemets
	const q1 = $("#q1").val();
	const q2 = $("#q2").val();
	const q3 = $("#q3").val();

	//use heroku (heroku.com) to get past CORS restrictions
	//see this stack overflow for
	//https://stackoverflow.com/a/55496118/12882691
	const formURL = `https://peaceful-shore-99755.herokuapp.com/https://docs.google.com/forms/u/0/d/e/1FAIpQLSeMgo3rqGz2C16c9YWofkk8Aq5NDfPqCrLOEfVgYAMa_6KUIQ/formResponse?${q1Entry}=${q1}&${q2Entry}=${q2}&${q3Entry}=${q3}&submit=Submit`;

	//open a XHR request and send it
	const xhr = new XMLHttpRequest();
	xhr.open("GET", formURL, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send();

	//empty the form fields
	$("#q1").val("");
	$("#q2").val("");
	$("#q3").val("");
});
