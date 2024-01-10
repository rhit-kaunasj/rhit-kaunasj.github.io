window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    let sidebar = document.querySelector("#nav");
    let content = document.querySelector("#navContainer");
    
    if (window.scrollY >= content.offsetTop) {
      sidebar.style.top = "0";
    }
    else {
      sidebar.style.top = "10";
      sidebar.style.marginTop = "50px";
    }
}