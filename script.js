
//Responsive-navbar
var mobile_nav_btn=document.querySelector(".mobile-navbar-btn");
var nav_header=document.querySelector(".header");


const toggleEvent=() =>{
    nav_header.classList.toggle("active");
}

mobile_nav_btn.addEventListener('click' , ()=>toggleEvent());


//redirecting to new page

function redirectToNewPage(event) {

 event.preventDefault(); // Prevent default form submission
  // Get form input values
  var Name = document.getElementById("name").value;
  var Email = document.getElementById("email").value;

  if(Name && Email){
      // Add fade-out effect to the body element
        document.body.classList.add("fade-out");
  }


  if(Name && Email){
    setTimeout(function() {

        // Redirect to the new page with query parameters
        window.location.href = "http://127.0.0.1:5500/formsubmit.html?q=${Name}&${Email}";
      }, 500);
  }
  else{
    alert("Please fill all fields");
    return ;
  }


}



//Animation using intersectionObserver
const hiddenElements=document.querySelectorAll(".hidden");


const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  })
})

//Observer to observe all hiddenElements
hiddenElements.forEach((el) =>observer.observe(el));

