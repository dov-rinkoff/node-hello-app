# Node Hello App

A simple Node.js API that returns a greeting with your name.

## Installation

```bash
npm install
```

## Running the App

```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### 1. GET with Query Parameter
```bash
curl "http://localhost:3000/hello?name=John"
```

### 2. GET with URL Parameter
```bash
curl "http://localhost:3000/hello/John"
```

### 3. POST with JSON Body
```bash
curl -X POST http://localhost:3000/hello \
  -H "Content-Type: application/json" \
  -d '{"name": "John"}'
```

## Response Format

All endpoints return a JSON response:
```json
{
  "message": "Hello John!"
}
```

If no name is provided, it defaults to "Guest".
