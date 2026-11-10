const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyZePZLw3m-ZjAftGGIgM5zlP3DZmZAo7TI_ELIk-b7LJbGLLedKuE3Yd97hWFXr15C/exec";

function startLove() {
    const questions = document.getElementById("questions");

    questions.classList.remove("hidden");

    questions.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

async function submitAnswers() {

    const name = document.getElementById("girlName").value.trim();
    const happiness = document.getElementById("happiness").value;
    const future = document.getElementById("future").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !happiness || !future) {
        alert("Please fill all required answers ❤️");
        return;
    }

    const button = document.querySelector("#questions button");

    button.disabled = true;
    button.textContent = "Sending... ❤️";

    const data = {
        name: name,
        happiness: happiness,
        future: future,
        message: message
    };

    try {

        await fetch(WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        document.getElementById("result").innerHTML = `
            <h2>Thank You ${escapeHTML(name)}! ❤️</h2>
            <p>Your answers have been submitted.</p>
            <h2>Forever Together? 💍</h2>
            <p>You are special! 💖</p>
        `;

        button.textContent = "Submitted ❤️";

    } catch (error) {

        alert("Something went wrong. Please try again.");

        button.disabled = false;
        button.textContent = "Send My Answers 💖";
    }
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
