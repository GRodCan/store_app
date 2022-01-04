// Server
const express = require('express');
require('dotenv').config();


const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api",apiSqlRouter);



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});
