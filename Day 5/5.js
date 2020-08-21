var commentCounter = 1;
var likeCounter = 1;
var dislikeCounter=1;

function commentHere() {
 
  const newElement = document.createElement("div");
 
  newElement.textContent = "User Comment ..." + commentCounter; 

 
  newElement.style.background = "royalblue"; 
  newElement.style.color = "white";
  newElement.style.margin = "4px";

  
  const commentBox = document.querySelector("#commentBox");


  commentBox.appendChild(newElement);
  

  commentCounter++;
}

function likeHere() {
  likeCounter++;

  let btnElement = document.querySelector("#btnid");
  btnElement.innerHTML = "Like " + likeCounter;
}

function dislikeHere(){
  dislikeCounter++;
  let btnElement1 = document.querySelector("#btnid1");
  btnElement1.innerHTML = "Dislike " + dislikeCounter;
  
}