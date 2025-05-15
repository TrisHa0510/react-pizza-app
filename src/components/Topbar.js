import React from 'react';
import './Topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <input className="search-input" type="text" placeholder="Search pizza..." />
      <div className="account-icon">👤</div>
    </div>
  );
}

export default Topbar;