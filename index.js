var express = require("express")
var bodyparser = require("body-parser")
var path = require("path")

var PORT = process.env.PORT || 3000

var app = express()
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, function() {
	console.log(`App is listening at http://localhost:${PORT}`)
})
