const express = require('express');
const fetchData = require('./fetchAndDisplayData');
const app = express();

app.use(express.static('public')); // Ensure your HTML and client-side JS are served

app.get('/fetch-data', async (req, res) => {
    try {
        const data = await fetchData();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
