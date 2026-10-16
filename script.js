/*
A Dog's Intelligence JavaScript
Filename: script.js
*/
// Show or hide the navigation menu on a small screen.
function showMenu() {
    let menu = document.getElementById("nav");
    let button = document.querySelector(".menu-btn");
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
    } else {
        menu.classList.add("open");
        button.setAttribute("aria-expanded", "true");
    }
}
// Check the form and show English messages.
function submitForm(event) {
    event.preventDefault();
    let nameInput = document.getElementById("contact-name");
    let emailInput = document.getElementById("contact-email");
    document.getElementById("form-message").innerHTML = "";

    // Check each field before showing the success message.
    if (nameInput.value.trim() == "") {
        window.alert("Please enter your name.");
        nameInput.focus();
        return;
    }
    if (emailInput.value.trim() == "") {
        window.alert("Please enter your email address.");
        emailInput.focus();
        return;
    }
    // Use the email input's built-in format check.
    if (emailInput.validity.typeMismatch) {
        window.alert("Please enter a valid email address, for example alex@example.com.");
        emailInput.focus();
        return;
    }
    document.getElementById("form-message").innerHTML="Thank you. We will contact you soon.";
}
document.querySelector(".menu-btn").onclick = showMenu;
document.querySelector("form").onsubmit = submitForm;
