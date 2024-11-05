const express = require('express');
const app = express();
const port = 3000;

//Defining route for API
app.get('/', (req, res) => {
    res.send("Hello World");
});

//Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})