var tableData = [];
var waitList = [];

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(tableData)
    })
    //do an app.get for waitlist
    app.post("/api/tables", function (req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body)
            res.json(true)
        } else {
            waitList.push(req.body)
            res.json(false)
        }
    })
}