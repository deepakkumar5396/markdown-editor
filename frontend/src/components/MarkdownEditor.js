import React, { useState } from 'react';
import '../markdown.css';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  // Handle input changes and send Markdown to backend
  const handleInputChange = async (e) => {
    const markdownText = e.target.value;
    setMarkdown(markdownText);

    // Call backend to convert Markdown to HTML
    const response = await fetch('http://localhost:5000/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markdown: markdownText }),
    });

    const data = await response.json();
    setHtml(data.html);
  };

  return (
    <div className="editor-container">
      <textarea
        className="markdown-input"
        placeholder="Type your Markdown here..."
        value={markdown}
        onChange={handleInputChange}
      />
      <div
        className="live-preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default MarkdownEditor;
