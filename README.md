# Calculator API

This is a simple Calculator API built with Express.js. It provides endpoints to perform basic arithmetic operations: addition, subtraction, multiplication, division, and modulus. There is also a reset endpoint (`/AC`) to reset the result to zero and an endpoint to retrieve the current result (`/=`).

## Prerequisites

- **Node.js** (version 14 or higher) and **npm** (version 6 or higher)
  - Check your Node.js version by running: `node -v`
  - Check your npm version by running: `npm -v`

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Running the API

To start the API, use the following command:

```bash
npm start

## Example JSON Body 

POST /add
{
  "num1": 10,
  "num2": 5
}
