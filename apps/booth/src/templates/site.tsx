import React from 'react';

const SiteTemplate = ({ pageContext: { title, backgroundColor } }) => {
  return (
    <div style={{ height: '100vh', width: '100vh', backgroundColor }}>
      <h1>{title}</h1>
    </div>
  );
};
export default SiteTemplate;
