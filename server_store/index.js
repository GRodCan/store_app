// Server
const express = require('express');
require('dotenv').config();
const cors = require("cors")

const Router= require('./routes/api_Routes')


const app = express();
const port = 5000;
app.use(cors());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", Router);



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
