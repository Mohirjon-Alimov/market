
var elBtn = document.querySelector(".btn");
var elOut = document.querySelector(".out");
var elInput = document.querySelector("#adding");
var newList = document.createElement("ul");
var elCheck = document.querySelector("#checking")
var things = [];




elBtn.addEventListener("click", function () {

  var listItem = document.createElement("li");
  listItem.textContent = elInput.value;
  
  var inpValue = elInput.value.trim();

  var checked = elCheck.checked;

  if(checked) {
    things.unshift(inpValue);
  }else if(!checked) {
    things.push(inpValue);
  }


  
  elOut.appendChild(newList);
  newList.appendChild(listItem);
  elOut.style.border = "1px solid aqua";
  elOut.style.padding = "20px";

  elInput.value = null;
})