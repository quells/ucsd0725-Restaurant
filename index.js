// dependencies
var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

// global variable
var reservations = [];

var PORT = process.env.PORT || 3000

var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// routes
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "reserve.html"));
});

app.get("/reserved", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "reserved.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "tables.html"));
});

app.post("/reserve", function(req, res) {
	var name = req.body.customerName;
	var size = Number(req.body.customerSize);
	// do something here
	var tableAvailable = false;
	if (tableAvailable) {
		res.redirect("/reserved?opening=true")
	} else {
		res.redirect("/reserved?opening=false")
	}
});

// create a new reservation
app.post("api/new", function(req, res) {
	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

	console.log(newReservation);

	reservations.push(newReservation);

	res.json(newReservation);
});

app.listen(PORT, function() {
	console.log(`App is listening at http://localhost:${PORT}`)
})
