const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const PORT = process.env.PORT || 3001;

// Express
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api", apiRoutes);
app.search(express.static("public"));

// HTML Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

// Port listener
app.listen(PORT, () => console.log(`Listen on PORT: ${PORT}`));