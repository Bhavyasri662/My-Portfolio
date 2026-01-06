const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("header nav a");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(section=>{
    if(scrollY>=section.offsetTop-120){
      current=section.getAttribute("id");
    }
  });
  navLinks.forEach(link=>{
    link.classList.toggle("active",link.getAttribute("href")==="#"+current);
  });
});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("status").textContent="Message sent successfully!";
});
