window.onload = (event) => {
  console.log("page is fully loaded");
  console.log(window.innerHeight);

  var pfp = document.getElementById("pfp");
  pfp.height = window.innerHeight;
  pfp.width = window.innerHeight;
};

function githubClick() {
  window.open("https://github.com/Arjun99ab", "_blank");
}
function homeClick() {
  $("body").load("index.html");
}
