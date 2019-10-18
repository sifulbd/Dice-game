var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImageName = "dice" + randomNumber + ".png";
var changeImageSource = document.getElementsByTagName('img')[0].setAttribute('src', randomImageName);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageName2 = "dice" + randomNumber2 + ".png";
var changeImageSource2  = document.getElementsByTagName('img')[1].setAttribute('src', randomImageName2);


if (randomNumber > randomNumber2) {
	document.querySelector('h2').innerHTML = "player 1 Win";
} else if  (randomNumber2 > randomNumber) {
	document.querySelector('h2').innerHTML = "player 2 Win";
}else {
	document.querySelector('h2').innerHTML = "Draw!";
}