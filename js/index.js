///Task 1
const links = document.querySelectorAll('.links a')
links.forEach((link) => {
    if (link.getAttribute('href').startsWith('https://')){
        link.classList.add('add-link')
    }
})

////Task 2
const folders = document.querySelectorAll('.folder');

folders.forEach(function(folder) {
  folder.addEventListener('click', function() {
    var subfolder = this.nextElementSibling;
    subfolder.classList.toggle('collapsed');
  });
});

///Task 4
const textDisplay = document.querySelector(".textDisplay");
const textEditor = document.querySelector(".textEditor");

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault();
    textDisplay.style.display = "none";
    textEditor.style.display = "block";
    textEditor.value = textDisplay.innerText.trim();
    textEditor.focus();
  }
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    textDisplay.style.display = "block";
    textEditor.style.display = "none";
    textDisplay.innerText = textEditor.value;
  }
});