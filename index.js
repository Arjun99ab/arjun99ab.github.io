window.onload = (event) => {
  console.log("page is fully loaded");
  console.log(window.innerHeight);

  var pfp = document.getElementById("pfp");
  pfp.height = window.innerHeight;
  pfp.width = window.innerHeight;
  var homePfp = document.getElementById("homePfp");
  homePfp.height = window.innerHeight;
  homePfp.width = window.innerHeight;
};

function githubClick() {
  window.open("https://github.com/Arjun99ab", "_blank");
}
function homeClick() {
  // $("body").load("index.html");
  // window.history.pushState({}, "", "index.html");
  window.location.replace("index.html");
}