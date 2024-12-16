const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/todos', require('./routes/TodoRoutes'));

module.exports = app;



