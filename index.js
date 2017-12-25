var logoClickListener = document.getElementsByClassName("facebook-logo");

logoClickListener[0].addEventListener("click", function() {
  if (this.textContent == "facebook") {
    this.textContent = "Justin Barry";
  } else {
    this.textContent = "facebook";
  }
});
