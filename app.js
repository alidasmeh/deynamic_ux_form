
// app.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ensure records.json exists
const recordsPath = path.join(__dirname, 'records.json');
if (!fs.existsSync(recordsPath)) {
    fs.writeFileSync(recordsPath, '[]', 'utf8');
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST endpoint to add records
app.post('/api/records', (req, res) => {
    try {
        // Read existing records
        const records = JSON.parse(fs.readFileSync(recordsPath, 'utf8'));
        
        // Add new record
        records.push({
            ...req.body,
            timestamp: new Date().toISOString()
        });
        
        // Write back to file
        fs.writeFileSync(recordsPath, JSON.stringify(records, null, 2), 'utf8');
        
        res.status(201).json({ 
            message: 'Record added successfully',
            record: req.body 
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to add record',
            details: error.message 
        });
    }
});

// GET endpoint to retrieve all records
app.get('/api/records', (req, res) => {
    try {
        const records = JSON.parse(fs.readFileSync(recordsPath, 'utf8'));
        res.json(records);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'Failed to retrieve records',
            details: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});