// Create varable referencing button
var createBtn = document.getElementById("myButton");
// Create varable referencing text input
var userText = document.getElementById("user-text");
var cardHolder = document.getElementById("card-holder");


createBtn.addEventListener("click", function(event) {
	createCard(userText.value);
	});

document.body.addEventListener("click", closeCard);

function createCard (userText) {
	var buildCard = "";
	buildCard += "<div class='card'> <a href='#'' class='close'></a> <h4>" + userText + "</div>" 
	console.log(buildCard);
	cardHolder.innerHTML += buildCard;
}

function closeCard(event) {
	if(event.target.className === 'close') {
		event.target.parentElement.remove();
	}
}