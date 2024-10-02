let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick= () => {
  navbar.classList.toggle("active");
};
window.onscroll= () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  // Check if dark mode is currently active (using moon icon)
  if (darkmode.classList.contains("bx-moon")) {
    // Switch to dark mode
    darkmode.classList.replace("bx-moon", "bx-sun"); // Change icon to sun
    document.body.classList.add("darkmode"); // Add dark mode class to body
  } else {
    // Switch back to light mode
    darkmode.classList.replace("bx-sun", "bx-moon"); // Change icon to moon
    document.body.classList.remove("darkmode"); // Remove dark mode class from body
  }
};


function send(){
  console.log("function call");
}