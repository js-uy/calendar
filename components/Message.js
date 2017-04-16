import React from 'react';

export default ({ title, description }) => (
  <div className="root">
    <h3>{title}</h3>
    {description && <p>{description}</p>}
    <style jsx>{`
      .root {
        max-width: 700px;
        text-align: center;
        margin: 0 auto;
      }
      h3 {
        margin-top: 40px;
      }
    `}</style>
  </div>
);
