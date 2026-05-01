let form = document.getElementById("reviewForm");
let success = document.getElementById("success");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  form.style.display = "none";
  success.style.display = "block";
});