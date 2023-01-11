function burgerMenu() {
  var x = document.getElementById("mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function scaleDesign() {
  var computing = document.getElementById("computing");
  computing.style.width="40%";
  computing.style.opacity="0.6";
  
  var design = document.getElementById("design");
  design.style.width="60%";
  design.style.opacity="1";

  var computingtext = document.getElementById("computingtext");
  var designtext = document.getElementById("designtext");
  computingtext.style.display="none";
  designtext.style.display="initial";
}

function scaleComputing() {
  var computing = document.getElementById("computing");
  computing.style.width="60%";
  computing.style.opacity="1";  
  
  var design = document.getElementById("design");
  design.style.width="40%";
  design.style.opacity="0.6";

  var computingtext = document.getElementById("computingtext");
  var designtext = document.getElementById("designtext");
  computingtext.style.display="initial";
  designtext.style.display="none";  
}