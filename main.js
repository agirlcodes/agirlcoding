// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");
// All page modals
var modal = document.querySelectorAll('.modal');
// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");
// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  modal[0].style.display = "block";
}
btn[1].onclick = function() {
  modal[1].style.display = "block";
}
btn[2].onclick = function() {
  modal[2].style.display = "block";
}
btn[3].onclick = function() {
  modal[3].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spans[0].onclick = function() {
  modal[0].style.display = "none";
}
spans[1].onclick = function() {
  modal[1].style.display = "none";
}
spans[2].onclick = function() {
  modal[2].style.display = "none";
}
spans[3].onclick = function() {
  modal[3].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal[0]) {
       modal[0].style.display = "none";
   }
  if (event.target == modal[1]) {
       modal[1].style.display = "none";
   }  
  if (event.target == modal[2]) {
       modal[2].style.display = "none";
   }  
  if (event.target === modal[3]) {
       modal[3].style.display = "none";
   }  
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

console.log(skillLayout)