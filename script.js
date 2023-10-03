let sunText = document.getElementById('sun');
sunText.addEventListener("click", () => {
	document.getElementById('textbox').innerText = "Have a great day!"
}); 

// Add a mouseover event listener to change the cursor to a pointer
let sunElement = document.getElementById("sun");

sunElement.addEventListener("mouseover", function() {
  sunElement.style.cursor = "pointer";
});

// Add a mouseout event listener to reset the cursor back to its default
sunElement.addEventListener("mouseout", function() {
  sunElement.style.cursor = "default";
});
