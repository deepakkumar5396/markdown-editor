const express = require('express');
const marked = require('marked'); // This is how it's typically imported in version 5.x
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Route for Markdown to HTML conversion
app.post('/convert', (req, res) => {
  const { markdown } = req.body;
  console.log('Received markdown:', markdown);

  if (!markdown || markdown.trim() === '') {
    return res.status(400).json({ error: 'Markdown content is required.' });
  }

  try {
    // Using marked to convert markdown to HTML
    const html = marked.parse(markdown);
    console.log('Converted HTML:', html);

    res.json({ html });
  } catch (err) {
    console.error('Error converting markdown:', err);
    res.status(500).json({ error: 'Failed to convert markdown.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
