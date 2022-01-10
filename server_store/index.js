// Server
const express = require('express');
require('dotenv').config();


const app = express();
const port = 5000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", Router);



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
