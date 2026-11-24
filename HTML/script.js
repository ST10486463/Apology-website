
const openButton = document.getElementById("openLetter");
const replyButton = document.getElementById("replyButton");

const letter = document.getElementById("letter");
const reply = document.getElementById("reply");

openButton.addEventListener("click", function () {

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

});

replyButton.addEventListener("click", function () {

    reply.classList.remove("hidden");

    reply.scrollIntoView({
        behavior: "smooth"
    });

});

const replyForm = document.getElementById("replyForm");

replyForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const response = {
        name: name,
        message: message,
        date: new Date().toLocaleString()
    };

    // Save a demonstration response in this browser
    const responses = JSON.parse(
        localStorage.getItem("reitumetseReplies") || "[]"
    );

    responses.push(response);

    localStorage.setItem(
        "reitumetseReplies",
        JSON.stringify(responses)
    );

    document.getElementById("successMessage")
        .classList.remove("hidden");

    replyForm.reset();

});

// SECRET LETTER FEATURE

const secretButton = document.getElementById("secretButton");
const secretLetter = document.getElementById("secretLetter");

secretButton.addEventListener("click", function () {

    secretLetter.classList.remove("hidden");

    secretButton.textContent = "Letter opened ♡";

    secretLetter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


// TYPEWRITER FEATURE

const typingButton = document.getElementById("typingButton");
const typingText = document.getElementById("typingText");

const words = "I wish I had appreciated you more, understood you better, and realised sooner how much your friendship meant to me.";

typingButton.addEventListener("click", function () {

    typingText.textContent = "";

    typingButton.disabled = true;

    let index = 0;

    const interval = setInterval(function () {

        typingText.textContent += words[index];

        index++;

        if (index >= words.length) {

            clearInterval(interval);

            typingButton.disabled = false;

        }

    }, 55);

});


// RANDOM MESSAGE FEATURE

const messages = [

    "I hope life is treating you gently. ♡",

    "You deserve kindness, happiness and beautiful things.",

    "I hope you never forget how much you are appreciated.",

    "Some people leave a meaningful mark on our lives.",

    "No matter what happens, I genuinely wish you well.",

    "Thank you for the memories and the friendship we shared."

];

const messageButton = document.getElementById("messageButton");
const randomMessage = document.getElementById("randomMessage");

messageButton.addEventListener("click", function () {

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    randomMessage.textContent = messages[randomIndex];

});

