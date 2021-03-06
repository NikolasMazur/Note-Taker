const express = require("express");
const path = require("path");
const apiRoutes = require("./routes");
const PORT = process.env.PORT || 3001;

// Express
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api", apiRoutes);
app.use(express.static("public"))
app.search(express.static("public"));

// HTML Routes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Port listener
app.listen(PORT, () => console.log(`Listen on PORT: ${PORT}`));