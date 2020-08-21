function send() {
    let userComment = document.querySelector("#id1").value; 
    
    const newEle = document.createElement("div");
    newEle.textContent = userComment; 
    newEle.style.display="flex";
    newEle.style.justifyContent="flex-end";
    newEle.style.alignItems="flex-end";
    newEle.style.background = "white"; 
    newEle.style.color = "black";
    newEle.style.margin = "10px";
    newEle.style.fontSize="30px";
    newEle.style.fontWeight="bolder";
    newEle.style.fontFamily="cursive";
    newEle.style.borderRadius="30px";


    
    const commentBox = document.querySelector("#commentBox");
  
   // commentBox.insertAfter(newEle, commentBox.firstChild);
   commentBox.appendChild(newEle);  
    document.querySelector("#id1").value = "";
    
  }
  
