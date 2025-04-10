const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connectDB } = require('./config/db');
const { serve } = require('./config/server');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/appointments', require('./routes/appointments'));

connectDB()
serve(app)

