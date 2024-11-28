const express = require('express');
const marked = require('marked');

const router = express.Router();

// POST route to convert Markdown to HTML
router.post('/', (req, res) => {
  const { markdown } = req.body;
  console.log('Received markdown:', markdown); // Log the received markdown

  // Check if markdown is valid and not empty
  if (!markdown || markdown.trim() === '') {
    return res.status(400).json({ error: 'Markdown content is required.' });
  }

  try {
    const html = marked(markdown);
    console.log('Converted HTML:', html); 

    // Return the HTML response
    res.json({ html });
  } catch (err) {
    console.error('Error converting markdown:', err);
    res.status(500).json({ error: 'Failed to convert markdown.' });
  }
});

module.exports = router;
