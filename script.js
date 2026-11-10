const WEB_APP_URL =https://script.google.com/macros/s/AKfycbyZePZLw3m-ZjAftGGIgM5zlP3DZmZAo7TI_ELIk-b7LJbGLLedKuE3Yd97hWFXr15C/exec

function startLove() {
    document.getElementById("questions").classList.remove("hidden");

    document.getElementById("questions").scrollIntoView({
        behavior: "smooth"
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

    try {
        await fetch(WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                name,
                happiness,
                future,
                message
            })
        });

        document.getElementById("result").innerHTML =
            "<h2>Thank You ❤️</h2><p>Your answers have been submitted!</p>";
    } catch (error) {
        alert("Something went wrong. Please try again.");
        button.disabled = false;
        button.textContent = "Send My Answers 💖";
    }
}
