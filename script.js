const pages = ["rugved9.html", "rugved10.html", "rugved11.html","rugved12.html","rugved13.html","rugved14.html"];
let currentPage = 0;

function showPage(index) {
    const iframe = document.getElementById("slideFrame");
    if (index >= pages.length) currentPage = 0; // Loop back to the first page
    else if (index < 0) currentPage = pages.length - 1; // Loop to the last page
    else currentPage = index;

    iframe.src = pages[currentPage];
}

// Function to navigate to the next/previous page
function changePage(step) {
    showPage(currentPage + step);
}

// Function to jump to a specific page
function goToPage(index) {
    showPage(index - 1);
}

// Initialize with the first page
showPage(currentPage);


function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  if (menu.style.width === '250px') {
    menu.style.width = '0'; // Close the menu
  } else {
    menu.style.width = '250px'; // Open the menu
  }
}
