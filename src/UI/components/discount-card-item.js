import React from 'react';

export function DiscountCardItem() {
  return (
    <div className="p-2">
      <div className="border border-gray-200 rounded flex p-4 w-48 card w-full">
        <div>img</div>
        <div className="pl-4">
          <p className="font-medium">Cinema</p>
          <p className="font-thin text-sm">Descrição - alguma coisa aqui</p>
        </div>
      </div>
    </div>
  );
}
