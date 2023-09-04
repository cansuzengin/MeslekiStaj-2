const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if (document.body.className == "dark") {
    document.getElementById("sun").className = "fas fa-moon";
  } else {
    document.getElementById("sun").className = "fas fa-sun";
  }
});

$(".nav-icon").click(function () {
  $("#nav-links").toggleClass("nav-links");
  return false;
});

window.addEventListener("scroll", function () {
  document.querySelector("nav").style.backgroundColor = "white";
  document.getElementById("back-to").style.display = "block";
});
