console.log("Welcome to Bravin Mulati's Portfolio!");
alert("Hello! Thanks for visiting my website.");
fetch("http://127.0.0.1:3000/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, message })
})
