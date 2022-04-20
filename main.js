//MODAL
var modal = document.getElementsByClassName("modal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

let WebBtn = document.getElementById('WebBtn')
WebBtn.onclick = function(){
    var modal = document.getElementById("webModal");
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    console.log("i am working")
    modal.style.display = "block";
  }
let GraphBtn = document.getElementById('GraphBtn')
GraphBtn.onclick = function(){
    var modal = document.getElementById("graphicModal");
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    console.log("i am working")
    modal.style.display = "block";
  }
let UXBtn = document.getElementById('UXBtn')
UXBtn.onclick = function(){
    var modal = document.getElementById("uxModal");
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    console.log("i am working")
    modal.style.display = "block";
  }
let ArtBtn = document.getElementById('ArtBtn')
ArtBtn.onclick = function(){
    var modal = document.getElementById("artModal");
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    console.log("i am working")
    modal.style.display = "block";
  }


  


//TIME OF SKILLS AND
// html & css
let now = new Date();
let baseStart = new Date(2020,04);
let baseYear = now.getYear() - baseStart.getYear()
var basicWeb=  baseYear
//smart times
let smartStart = new Date(2021,03);
let smartYear = now.getYear() - smartStart.getYear()
var smartWeb=  smartYear
//designer times
let designStart = new Date(2021,11);
let designYear = now.getYear() - designStart.getYear()
var designWeb=  designYear

// SKILLS
let skillLayout = document.getElementById('skillSet')
skillLayout.innerHTML = `
<ul>
<h3>Web Technologies</h3>
<li>HTML - ${basicWeb} years</li>
<li>CSS - ${basicWeb} years </li>
<li>SASS - ${smartWeb} year</li>
<li>JavaScript - ${smartWeb} year</li>
<li>REST APIs - ${smartWeb} year</li>
<li>MERN Stack - 3 Months</li>
<li>Node.js - 3 Months</li>
<li>Supabase - 3 Months</li>
</ul>

<ul>
<h3>Design Software</h3>
  <li>Adobe Photoshop - ${designWeb} year</li>
  <li>Adobe Illustrator - ${designWeb} year </li>
  <li>Adobe XD - ${designWeb} year</li>
  <li>Krita - ${basicWeb} years</li>
  <li>Figma - 3 Months</li>
</ul>

<ul>
<h3>Other Skills</h3>
<li>Microsoft Office -  ${basicWeb} years</li>
<li>G Suite - ${basicWeb} years</li>
  <li>Copywriting - ${smartWeb} year</li>
</ul>
`
