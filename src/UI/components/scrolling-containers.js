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

export function ScrollingContainers({ children }) {
  return <ScrollingWrapper>{children}</ScrollingWrapper>;
}
