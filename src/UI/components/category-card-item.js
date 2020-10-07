import React from 'react';

export function CategoryCardItem({ type = 'toHome' }) {
  if (type === 'toHome') {
    return (
      <div>
        <div className="card w-24 h-24 bg-gray-300 rounded-lg mx-3 md:mx-2" />
        <div className="flex justify-center my-2">Mercado</div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="card w-40 md:w-64 h-24 md:h-40 bg-gray-300 rounded-lg m-2
      md:m-8"
      >
        <div className="p-4">Mercado</div>
      </div>
    </div>
  );
}
