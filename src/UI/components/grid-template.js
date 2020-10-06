import React from 'react';

export function GridTemplate({ children }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">{children}</div>
    </div>
  );
}
