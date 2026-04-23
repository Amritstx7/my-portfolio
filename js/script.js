const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;

        if (details.style.display === "block") {
            details.style.display = "none";
            button.textContent = "Show Details";
        } else {
            details.style.display = "block";
            button.textContent = "Hide Details";
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

// DARK MODE
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// FILTER PROJECTS
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        if (category === "all") {
            project.style.display = "block";
        } else {
            project.style.display =
                project.dataset.category === category ? "block" : "none";
        }
    });
}

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            section.classList.add("show");
        }
    });
});