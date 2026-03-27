const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            button.textContent = "Show Details";
        }
    });
});

const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        error.textContent = "Please fill out all fields.";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "Please enter a valid email.";
        return;
    }

    error.textContent = "";
    alert("Form submitted successfully!");
});