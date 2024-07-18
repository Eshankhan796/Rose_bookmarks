const dialog = document.querySelector('.a9');
function add_bookmark(condition) {
  if (condition === "open") {
    dialog.style.display = "block";
  } else if (condition === "close") {
    dialog.style.display = "none";
  }
  console.log(condition)
}