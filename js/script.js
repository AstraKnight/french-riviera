const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    // header.classList.toggle("sticky", this.window.scrollY > 0);
    header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

/* Open and close the hamburger menu */
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

/* Open and close the hamburger menu automatically */
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};


/* Get the current year in your website */
const yearElement = document.querySelector('#year');

function displayYear() {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = currentYear;
}

// Call the function to display the current year
displayYear();