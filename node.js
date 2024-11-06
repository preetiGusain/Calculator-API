const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());
// Middleware to parse JSON in the request body, This middleware enables Express to parse JSON data in req.body.

app.get('/', (req, res) => {
    res.send('Welcome to the Calculator API!');
});

let currentResult = 0;

function calculate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Error: Invalid input'; 
    }

    switch (operator) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return (num1 / num2).toFixed(2);
        case 'mod':
            return num1 % num2;
        default:
            return 'Error: Invalid operator';
    }
}
app.post('/:operator', (req, res) => {
    const { num1, num2 } = req.body;
    const operator = req.params.operator;  // Get the operator from the URL

    currentResult = calculate(num1, num2, operator);
    res.send(currentResult.toString());
});

app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, 'add');
    res.send(currentResult.toString());
});

app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, 'subtract');
    res.send(currentResult.toString());
});

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, 'multiply');
    res.send(currentResult.toString());
});

app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, 'divide');
    res.send(currentResult.toString());
});

app.post('/mod', (req, res) => {
    const { num1, num2 } = req.body;
    currentResult = calculate(num1, num2, 'mod');
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