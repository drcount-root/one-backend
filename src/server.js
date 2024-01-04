// module imports
const express = require("express");

// utilities imports
const getHome = require("./utils/getHome");
const listenerFunc = require("./utils/listenerFunc");

const app = express();
const PORT = 8001;

app.use(express.json());

app.get("/", getHome);

app.listen(PORT, listenerFunc(PORT));
