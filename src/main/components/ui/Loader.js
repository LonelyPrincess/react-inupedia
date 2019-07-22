import React from 'react';

import '../../../res/styles/loader.css';

function Loader({ show = true, message }) {
  return !show ? null : (
    <div className="loader-wrapper">
      <div className="loader-container">
        <i className="loading-icon"></i>
        <p className="loading-text">Loading...</p>
        { message && (
          <p className="loading-details">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Loader;
