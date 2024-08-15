'use client'
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const REGION_SIZE = 150; // Size of each region
const GAP = 50; // Gap between regions
const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

const regions = [
  { id: 1, x: SCREEN_WIDTH / 4 - REGION_SIZE / 2, y: SCREEN_HEIGHT / 3 - REGION_SIZE / 2 },
  { id: 2, x: (SCREEN_WIDTH * 3) / 4 - REGION_SIZE / 2, y: SCREEN_HEIGHT / 3 - REGION_SIZE / 2 },
  { id: 3, x: SCREEN_WIDTH / 4 - REGION_SIZE / 2, y: (SCREEN_HEIGHT * 2) / 3 - REGION_SIZE / 2 },
  { id: 4, x: (SCREEN_WIDTH * 3) / 4 - REGION_SIZE / 2, y: (SCREEN_HEIGHT * 2) / 3 - REGION_SIZE / 2 },
];

const DragPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleStop = () => {
    const { x, y } = position;
    let maxOverlapArea = 0;
    let newPosition = { x, y };

    regions.forEach(region => {
      const overlapX = Math.max(0, Math.min(x + 100, region.x + REGION_SIZE) - Math.max(x, region.x));
      const overlapY = Math.max(0, Math.min(y + 100, region.y + REGION_SIZE) - Math.max(y, region.y));
      const overlapArea = overlapX * overlapY;

      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        newPosition = { x: region.x, y: region.y };
      }
    });

    setPosition(newPosition);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' , background:'white' }}>
      {regions.map(region => (
        <div
          key={region.id}
          style={{
            width: REGION_SIZE,
            height: REGION_SIZE,
            position: 'absolute',
            left: region.x,
            top: region.y,
            background: 'rgba(0, 0, 255, 0.2)',
            border: '1px solid blue',
          }}
        ></div>
      ))}

      <Draggable
        position={position}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightgray',
            textAlign: 'center',
            lineHeight: '100px',
            borderRadius: '10px',
            border: '1px solid black',
            position: 'absolute',
            transition:'all 0.4s'
          }}
        >
          Drag me
        </div>
      </Draggable>
    </div>
  );
};

export default DragPage;
