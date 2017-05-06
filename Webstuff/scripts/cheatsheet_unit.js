$(document).ready(function() {
	Initialize();
});

function ParseData(json) {
	for (var unit in json) {
		if (json.hasOwnProperty(unit)) {
			console.log(json[unit]['name']);
		}
	}
}

function sayHi() {
	alert("Hello");
}

function Initialize() {
	ParseData(data_07_ko);
	$("#content").click(function() {
		sayHi();
	});

}