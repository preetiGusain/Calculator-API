const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in the request body, This middleware enables Express to parse JSON data in req.body.
app.use(express.json());

function calculateSum(n) {
    let ans = 0;
    return ans + Number(n);
}


app.post('/', (req, res) => {
    const n = req.body.n;
    const ans = calculateSum(n)
    res.send(ans.toString());
});

//Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})