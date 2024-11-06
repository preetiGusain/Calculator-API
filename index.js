const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// Middleware to parse JSON in the request body, This middleware enables Express to parse JSON data in req.body.

let currentResult = 0;

function calculate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return (num1 / num2).toFixed(2);
        case '%':
            return num1 % num2;
        default:
            return 'Error: Invalid operator';
    }
}

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, '+');
    res.send(currentResult.toString());
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, '-');
    res.send(currentResult.toString());
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, '*');
    res.send(currentResult.toString());
});

app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, '/');
    res.send(currentResult.toString());
});

app.post('/mod', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, '%');
    res.send(currentResult.toString());
});

app.get('/AC', (req, res) => {
    currentResult = 0;
    res.send(currentResult.toString());
})

// GET endpoint to retrieve the current result
app.post('/=', (req, res) => {
    res.send(currentResult.toString());
});

//Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})