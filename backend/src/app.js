import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

// Initialize env variables for testing/development envs.
dotenv.config();

// Create the express application
const app = express();

// Send back JSON for API endpoints and use our frontend build
app.use(express.json());
app.use(express.static(path.resolve('..', 'frontend', 'build')));

export default app;
