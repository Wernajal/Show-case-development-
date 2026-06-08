const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Contact route
app.post("/contact", (req, res) => {
    const { name, message } = req.body;

    console.log("📩 New Message:");
    console.log("Name:", name);
    console.log("Message:", message);

    res.send("Message received successfully!");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://127.0.0.1:3000");
});
