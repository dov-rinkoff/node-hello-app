const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint - name as query parameter
// Example: http://localhost:3000/hello?name=John
app.get('/hello', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({
    message: `Hello ${name}!`
  });
});

// GET endpoint - name as URL parameter
// Example: http://localhost:3000/hello/John
app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.json({
    message: `Hello ${name}!`
  });
});

// POST endpoint - name in request body
// Example: POST http://localhost:3000/hello with body: {"name": "John"}
app.post('/hello', (req, res) => {
  const name = req.body.name || 'Guest';
  res.json({
    message: `Hello ${name}!`
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Hello API!',
    endpoints: [
      'GET /hello?name=YourName',
      'GET /hello/:name',
      'POST /hello with body: {"name": "YourName"}'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/hello?name=YourName`);
});
