$(document).ready(function() {
  console.log( "document loaded" );
  console.log(window.innerHeight);

  var pfp = document.getElementById("pfp");
  pfp.height = window.innerHeight;
  pfp.width = window.innerHeight;
  var homePfp = document.getElementById("homePfp");
  homePfp.height = window.innerHeight;
  homePfp.width = window.innerHeight;
});

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function elementsOutro() {
  document.getElementById('btnWork').style.animation = "navBarBtnsOutro 0.5s ease";
  document.getElementById('btnAbout').style.animation = "navBarBtnsOutro 0.5s ease";
  document.getElementById('btnContact').style.animation = "navBarBtnsOutro 0.5s ease";
  document.getElementById('homePfp').style.animation = "homePfpOutro 0.5s ease";
  document.getElementById('github').style.animation = "githubLogoOutro 0.5s ease";
  document.getElementById('pfp').style.animation = "pfpOutro 0.5s ease";
  document.getElementById('textHi').style.animation = "hiOutro 0.5s ease";
  document.getElementById('textWho').style.animation = "whoOutro 0.5s ease";
}



function githubClick() {
  window.open("https://github.com/Arjun99ab", "_blank");
}


function homeClick() {
  elementsOutro();

  sleep(600).then(() => {
    $("body").load("index.html");
    window.history.pushState({}, "", "/");
    document.title = "Arjun Samavedam";
  });
}

function workClick() {
  elementsOutro();

  sleep(600).then(() => {
    $("body").load("work.html");
    window.history.pushState({}, "", "work");
    document.title = "Work";
  }); 
  //window.location.replace("index.html");
}

function aboutClick() {
  elementsOutro();
  
  sleep(600).then(() => {
    $("body").load("about.html");
    window.history.pushState({}, "", "about");
    document.title = "About Me";
  });
}

let createGuiElement = (id1, bottom, right) => {
  element = document.createElement("div")
  css = {
      backgroundColor: "#9368e4",
      border: "solid",
      borderColor: "black",
      borderWidth: "2px",
      borderRadius: "7px",
      fontFamily: "Nunito",
      position: "absolute",
      bottom: bottom.toString() + "px",
      right: right.toString() + "px",
      padding: "5px",
      color: "black",
      fontSize: "10pt",
  };
  Object.keys(css).forEach(function (x) {
    element.style[x] = css[x];
  });
  element.id = id1;
  // add the text node to the newly created div
  //element.appendChild(newContent);

  document.body.appendChild(element);

};

function contactClick() {
  elementsOutro();
  
  sleep(600).then(() => {
    $("body").load("contact.html");
    window.history.pushState({}, "", "contact");
    document.title = "Contact Me";
  });
  



}

window.addEventListener('resize', function(event) {
  if ($('#reload').length === 0) {
    createGuiElement("reload", 5, 5);
    document.getElementById("reload").innerHTML = "Looks like you resized your window!" + "<br />" + "Reload the page to fix any issues.";
    document.getElementById('reload').style.textAlign = "center";
  }
  
}, true);