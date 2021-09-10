require("express")()
.get("/", (req, res) => {
    return res.send(__dirname + "/views/index.html")
})
.listen(5500)