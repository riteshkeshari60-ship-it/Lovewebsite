function startLove() {
    document.getElementById("questions").classList.remove("hidden");

    document.getElementById("questions").scrollIntoView({
        behavior: "smooth"
    });
}

function submitAnswers() {
    let name = document.getElementById("girlName").value.trim();
    let happiness = document.getElementById("happiness").value;
    let future = document.getElementById("future").value;
    let message = document.getElementById("message").value.trim();

    if (name === "" || happiness === "" || future === "") {
        alert("Please fill all required answers ❤️");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>Thank You, ${escapeHTML(name)}! ❤️</h2>
        <p>Your answers are precious to me.</p>
        <p>Happiness: ${escapeHTML(happiness)}</p>
        <p>Our Future: ${escapeHTML(future)}</p>
        <p>Your Message: ${escapeHTML(message || "No message written")}</p>
        <h2>Forever Together? 💍</h2>
        <p>Thank you for sharing your feelings with me! 💖</p>
    `;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(char) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[char];
    });
}