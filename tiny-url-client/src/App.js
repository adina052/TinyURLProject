import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const url=`http://localhost:3001/tinyUrl/${shortUrl}?shortUrl=${shortUrl}`;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3001/tinyUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl }),
    });
    const data = await response.json();
    setShortUrl(data.shortUrl);
  };
  return (
  <Container className="mt-5">
  <h1 className="text-center">Tiny Url</h1>
  <Form onSubmit={handleSubmit} className="mt-4">
    <Form.Group controlId="formLongUrl">
      <Form.Control
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
        required
      />
    </Form.Group>
    <Button variant="primary" type="submit" className="mt-3">
      Shorten
    </Button>
  </Form>
  {shortUrl && (
    <Alert variant="success" className="mt-4">
      <p>Short URL:</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
      http://tinyurl.co.il/{shortUrl}
      </a>
    </Alert>
  )}
</Container>
);
}

export default App;
