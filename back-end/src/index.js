const express = require('express');

const app = express();

const host = 'localhost';
const port = 3333;

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});