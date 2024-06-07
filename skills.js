document.addEventListener("DOMContentLoaded", () => {
    const skillLinks = document.querySelectorAll(".skill-list li a");
    const skillIcons = document.querySelectorAll(".skill-icons p");

    skillLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const skill = link.getAttribute("data-skill");
            
            skillIcons.forEach(icon => {
                if (icon.getAttribute("data-skill") === skill) {
                    icon.classList.add("active");
                } else {
                    icon.classList.remove("active");
                }
            });
        });
    });

    // Add animation to each word in the skill summary
    skillSummaries.forEach(paragraph => {
        const words = paragraph.innerHTML.split(" ");
        paragraph.innerHTML = ""; // Clear current content
        words.forEach((word, index) => {
            const span = document.createElement("span");
            span.innerHTML = word + " ";
            span.style.setProperty('--animation-order', index);
            paragraph.appendChild(span);
        });
    });
});
