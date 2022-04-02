const express = require("express");
const hbs = require("hbs");
const port = 3004;
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","hbs");
app.set("views", path.join(__dirname,"views"));

const router = require("./routes/index");

app.use("/",router);

app.listen(port,()=>{
    console.log(`sv corriendo en http://localhost:${port}`);
})


