const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Use promise-based mysql2
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const fs = require('fs');

app.use(cors());
app.use(express.json());

// Database connection pool setup
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
      ca: fs.readFileSync(process.env.SSL_CA),
    },
  });

// Sample route to test database connection
app.get('/data', async (req, res) => {
    try {
        const [results] = await db.query('SELECT * FROM devquestdbtestone.tblonetest;');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve data' });
    }
});

app.post('/api/insert', async (req, res) => {
    const { name, age } = req.body;
    const query = 'INSERT INTO devquestdbtestone.tblonetest (name, age) VALUES (?, ?)';
    try {
        await db.execute(query, [name, age]);
        res.status(200).send('Data inserted successfully');
    } catch (err) {
        console.error('Failed to insert data:', err);
        res.status(500).send('Failed to insert data');
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});