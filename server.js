//! DEPENDENCIES
require("dotenv").config();
// console.log(process.env);
const express = require("express");

//! CONFIG
const app = express();
const port = process.env.PORT || 3000;

//! ROUTES
app.get("/", (req, res) => {
	res.send("Hello");
});

//! LISTEN
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
