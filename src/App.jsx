import React from 'react';
import PatternWaves from './PatternWaves.jsx';
import './index.css';

export default function App() {
  return (
    <main className="demo">
      <div className="waves">
        <PatternWaves
          preset="silk"
          color="#ffffff"
          backgroundColor="#000000"
          fade="edges"
          interactive
          cursorSize={50}
          cursorStrength={0.6}
        />
      </div>
    </main>
  );
}
