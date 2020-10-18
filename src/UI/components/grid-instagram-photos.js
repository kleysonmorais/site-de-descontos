import React from 'react';
import { ScrollingContainers } from './scrolling-containers';

export default function GridInstagramPhotos() {
  const items = [];
  for (let index = 0; index < 6; index += 1) {
    items.push(
      <img
        key={index.toString()}
        src="https://picsum.photos/600/600"
        alt="title"
        width="40%"
        height="40%"
        className="card pr-1"
      />
    );
  }
  return <ScrollingContainers>{items}</ScrollingContainers>;
}
