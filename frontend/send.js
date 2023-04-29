const form = document.getElementById("form");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const payload = new FormData(form)
    const data = new URLSearchParams(payload)

    const previousEmail = "";

    if(previousEmail === data.get(email))
        return alert("You already send a message");

    fetch('/email', {
        method: 'POST',
        body: data
    })
    .then(res => res.json)
    .then(data => console.log(data))
    .catch(err => console.log(err))

    email.value = "";
    message.value = "";
});

