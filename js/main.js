// Menu Show
function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}
showMenu("nav-toggle", "nav-menu");

function nestedLinkHandler(link) {
  const interviewBooks = document.getElementById("inteview-book-container");
  const codingBooks = document.getElementById("coding-books-container");
  if (link === "interview") {
    codingBooks.style.display = "none";
    interviewBooks.style.display = "block";
  } else if (link === "codingLanguage") {
    codingBooks.style.display = "block";
    interviewBooks.style.display = "none";
  } else {
    codingBooks.style.display = "block";
    interviewBooks.style.display = "block";
  }
}

function displayCategories(e) {
  if (e.target.id !== "category-container") {
    document
      .getElementById("category-nested-links")
      .style.removeProperty("opacity");
    document
      .getElementById("category-nested-links")
      .style.removeProperty("visibility");
    return;
  }

  if (document.getElementById("category-nested-links").style.opacity) {
    document
      .getElementById("category-nested-links")
      .style.removeProperty("opacity");
    document
      .getElementById("category-nested-links")
      .style.removeProperty("visibility");
  } else {
    document.getElementById("category-nested-links").style.opacity = 1;
    document.getElementById("category-nested-links").style.visibility =
      "visible";
  }
}

// scroll to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
