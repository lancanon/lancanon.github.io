const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static('lancanon.github.io'));

// In-memory storage for fame count (for demonstration purposes)
let fameCount = 0;

// Endpoint to get fame count
app.get('/fame', (req, res) => {
    res.json({ fame: fameCount });
});

// Endpoint to update fame count
app.patch('/fame', (req, res) => {
    fameCount += 1;
    res.json({ success: true, fame: fameCount });
});

// Start the server
app.listen(port, () => {
    console.log(`API server running at http://localhost:${port}`);
});