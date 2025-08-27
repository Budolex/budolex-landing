import React from 'react';

export default function TrustBar(): React.JSX.Element {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-content">
          <div className="trust-bar-item">
            <span>📋</span>
            <span>Ustawa 2021/2025</span>
          </div>
          <div className="trust-bar-item">
            <span>🌐</span>
            <span>Portal Danych</span>
          </div>
          <div className="trust-bar-item">
            <span>⚖️</span>
            <span>DFG/UFG</span>
          </div>
          <div className="trust-bar-item">
            <span>🏛️</span>
            <span>MRP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
