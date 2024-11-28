import React from 'react';

const LivePreview = ({ html }) => {
  return (
    <div
      className="live-preview"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
};

export default LivePreview;
