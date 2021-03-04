const { Router } = require("express")
const router = Router()
const weather = require("weather-js")

module.exports = router.get("/", (req,res) => {
var q = req.query.search || "Beirut, Lebanon"
weather.find({search: q, degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   res.render("index", {
    weather: result[0].current
})
  });

})

