import React from 'react';

const StatItem = ({ value, label }) => {
  return (
    <div className="stat">
      <div className="stat__value">{value}</div>
      <div className="stat__label">{label}</div>
    </div>
  );
};

export default StatItem;
