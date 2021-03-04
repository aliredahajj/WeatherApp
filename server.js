const express = require("express")
const app = express()
const path = require("path")

const PORT = 3000
app.set("view engine", "ejs")
app.set("views", "views")
const router = require("./routers/routes")
app.use(express.static(path.join(__dirname, "public")))
app.use("/", router)
app.listen(PORT, () => {
    console.info("[INFO]: Connected to port: " + PORT)
})