import React from 'react';
import styled from 'styled-components';

const ScrollingWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  .card {
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export function ScrollingContainers() {
  return (
    <ScrollingWrapper>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
      <div className="card w-24 h-24 bg-gray-400 text-center rounded-md mx-2">
        <h2>Card</h2>
      </div>
    </ScrollingWrapper>
  );
}
