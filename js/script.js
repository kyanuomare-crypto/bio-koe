// TOGGLE CLASS ACTIVE for hamburg
const navbarNav = document.querySelector(".navbar-nav");
//If hamburg is Clicked
document.querySelector("#hamburg").onclick = () => {
  navbarNav.classList.toggle("active");
};

// TOGGLE CLASS ACTIVE for search form
const searchIcon = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// If search is Clicked
searchIcon.addEventListener("click", (event) => {
  event.preventDefault();
  searchForm.classList.toggle("active");
});

// Search Keywords
const searchSubmit = document.querySelector("#search-submit");
searchSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const query = searchBox.ariaValueMax.toLowerCase();
  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  // Find elements
  const allElements = document.querySelectorAll("body*");
  let found = false;
  allElements.forEach((element) => {
    if (element.textContent.toLowerCase().includes(query)) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      element.style.backgroundColor = "yellow";
      setTimeout(() => (element.style.backgroundColor = ""), 2000);
      found = true;
    }
  });
  if (!found) {
    alert("No matches found.");
  }
});

// Click outside sidebar to remove nav
const hamburger = document.querySelector("#hamburg");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// TO YOUTUBE
console.log("Video gallery loaded successfully.");

// CHANNEL LOGO
document.getElementById("youtubeImage").addEventListener("click"),
  function () {
    window.location.href = "https://www.youtube.com/@KyanuOmarEagan";
  };
