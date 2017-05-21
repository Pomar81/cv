
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pomar.jpg') {
      myImage.setAttribute ('src','images/pomarG.jpg');
    } else {
      myImage.setAttribute ('src','images/pomar.jpg');
    }	
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ' is friend of Pomaraiko';
}

/*if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ' is friend of Pomaraiko';
}
*/
myButton.onclick = function() {
  setUserName();
}
