// TOGGLE CLASS ACTIVE for hamburg
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburg");

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    navbarNav.classList.toggle("active");
  });
}

// TOGGLE CLASS ACTIVE for search form
const searchIcon = document.querySelector("#search");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

if (searchIcon && searchForm && searchBox) {
  searchIcon.addEventListener("click", (event) => {
    event.preventDefault();
    searchForm.classList.toggle("active");
    // focus the input when opened
    if (searchForm.classList.contains("active")) {
      searchBox.focus();
    }
  });

  // Use the label as the search submit (keeps HTML unchanged)
  const searchLabel = document.querySelector(".search-form label");
  if (searchLabel) {
    searchLabel.addEventListener("click", (event) => {
      event.preventDefault();
      const query = searchBox.value.trim().toLowerCase();

      if (!query) {
        alert("Please enter a search term.");
        return;
      }

      const allElements = document.querySelectorAll("body *");
      let found = false;
      allElements.forEach((element) => {
        if (element.textContent.toLowerCase().includes(query)) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          const prevBG = element.style.backgroundColor;
          element.style.backgroundColor = "yellow";
          setTimeout(() => {
            element.style.backgroundColor = prevBG || "";
          }, 2000);
          found = true;
        }
      });

      if (!found) {
        alert("No matches found.");
      }
    });
  }
}

// Click outside sidebar to remove nav
document.addEventListener("click", function (e) {
  const target = e.target;
  // if the click isn't inside hamburger or navbar, hide navbar
  if (
    hamburger &&
    navbarNav &&
    !hamburger.contains(target) &&
    !navbarNav.contains(target)
  ) {
    navbarNav.classList.remove("active");
  }
});

// Console check
console.log("Video gallery loaded successfully.");

// FIXED: YouTube Image Click (safe fallback)
const ytImage = document.getElementById("youtubeImage");
if (ytImage) {
  ytImage.addEventListener("click", function (e) {
    // if the image is wrapped in an <a>, let it handle navigation;
    // otherwise navigate to the channel.
    const parentLink = ytImage.closest("a");
    if (!parentLink) {
      window.location.href = "https://www.youtube.com/@KyanuOmarEagan";
    }
  });
}
