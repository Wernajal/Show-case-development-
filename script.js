const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
    const { name, message } = req.body;

    console.log("New message:", name, message);

    res.send("✅ Message received successfully!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
