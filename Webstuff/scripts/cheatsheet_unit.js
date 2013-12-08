$(document).ready(function() {
	Initialize();
});

function sayHi() {
	alert("Hello");
}

function Initialize() {
	$("#content").click(function() {
		sayHi();
	});

}