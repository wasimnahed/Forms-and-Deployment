let express = require("express")
var router = express.Router();

let app = express()

app.get("/", function(req, res, next) {
    res.send('cool')
})

module.exports = router