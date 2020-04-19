//#5 create new file - server.js
const express = require("express");

const app = express();

//single end-point for initial test
app.get("/", (req, res) => res.send("API running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
