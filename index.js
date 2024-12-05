window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const gridItems = document.querySelectorAll(".grid-item");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Add active class to the clicked tab
        tab.classList.add("active");
  
        const filter = tab.getAttribute("data-filter");
  
        gridItems.forEach(item => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";    
          }
        });
      });
    });
  });
  