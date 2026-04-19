document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por tu mensaje. Pronto nos pondremos en contacto.");
        form.reset();
    });
});
