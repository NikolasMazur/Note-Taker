const express = require("express");
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const PORT = process.env.PORT || 3001;

// Express
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.search(express.static("public"));

// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Port listener
app.listen(PORT, () => console.log(`Listen on PORT: ${PORT}`, ));