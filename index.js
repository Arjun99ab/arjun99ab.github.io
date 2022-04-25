

window.onload = (event) => {
  console.log('page is fully loaded');
  console.log(window.innerHeight);

  var pfp = document.getElementById('pfp');
  pfp.height = window.innerHeight-7;
  pfp.width = window.innerHeight-7;


};

function githubClick() {
  window.open("https://github.com/Arjun99ab", "_blank");
}
