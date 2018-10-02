
var tableData = [
    {
      routeName: ""
    },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];


module.exports = function(app) {
    app.get("/api/tables", function(req, res) {
        res.json(tableData)
    })
}

