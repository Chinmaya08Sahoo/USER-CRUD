require('module-alias/register')
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser");
const multer = require("multer");


const app = express();

const PORT = process.env.PORT || 7500;
const db=require('./utils/db')
db();

const clc = require("cli-color");
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.use("/", require("./routes"));
app.use("*", (req, res)=>{
  res.status(404).send({
    success: false,
    statusCode : 404,
    displayMessage: "The endpoint you are looking for is not exist",
    err_type: "NOTFOUND",
    message: "endpoint not exist",
    description:  "ERR-404",
  })
})

app.listen(PORT, () => {
  if (!PORT) {
    console.log(clc.red("No Port defined"));
    process.exit();
  }
  console.log(`User CRUD is running at http://localhost:${PORT}`);
});

