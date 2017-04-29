// 4. Your `apiRoutes.js` file should contain two routes:
//
//    * A GET route with the url `/api/friends`. This will be used to display
      // a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey
      // results. This route will also be used to handle the compatibility logic.
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newcharacter = req.body;

  console.log(newcharacter);

  // We then add the json the user sent to the character array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
