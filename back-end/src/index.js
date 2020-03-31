const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const host = 'localhost';
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});