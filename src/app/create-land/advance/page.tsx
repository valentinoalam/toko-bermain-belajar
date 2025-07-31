"use client"
import { Game } from '@/components/game/advance/Game';
import React, { useEffect, useRef } from 'react';

function App() {
  const gameRef = useRef<HTMLDivElement>(null);
  const gameInstanceRef = useRef<Game | null>(null);

  useEffect(() => {
    if (gameInstanceRef.current) return

    if (gameRef.current && !gameInstanceRef.current) {
      async function loadGame() {
        const { Game } = await import('@/components/game/advance/Game');
        gameInstanceRef.current = new Game(gameRef.current!.id);
      }
      loadGame()
    }

    return () => {
      if (gameInstanceRef.current) {
        gameInstanceRef.current.destroy();
        gameInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-100 flex flex-col items-center justify-center p-4">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          🏝️ Island Terrain Builder
        </h1>
        <p className="text-lg text-slate-600">
          Build your dream island using colorful playdough materials and decorative objects
        </p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-slate-200">
        <div 
          id="game-container" 
          ref={gameRef}
          className="rounded-xl overflow-hidden shadow-inner"
          style={{ 
            width: '1200px', 
            height: '800px',
            background: 'linear-gradient(to bottom, #87CEEB, #98D8E8)'
          }}
        />
      </div>
      
      <div className="mt-6 max-w-4xl bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">🎨 Terrain Materials</h3>
            <ul className="space-y-1">
              <li><span className="inline-block w-3 h-3 bg-green-400 rounded mr-2"></span>Grass - Create lush green areas</li>
              <li><span className="inline-block w-3 h-3 bg-yellow-400 rounded mr-2"></span>Sand - Build beaches and paths</li>
              <li><span className="inline-block w-3 h-3 bg-amber-700 rounded mr-2"></span>Earth - Form hills and mountains</li>
              <li><span className="inline-block w-3 h-3 bg-blue-500 rounded mr-2"></span>Water - Add rivers and lakes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">🏝️ Objects</h3>
            <ul className="space-y-1">
              <li>🌳 Trees - Add natural beauty</li>
              <li>🪨 Stones - Create rocky areas</li>
              <li>🐎 Animals - Bring life to your island</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">🎮 Controls</h3>
            <ul className="space-y-1">
              <li><strong>Left Click:</strong> Paint terrain/place objects</li>
              <li><strong>Right Click + Drag:</strong> Pan camera</li>
              <li><strong>Q/E Keys:</strong> Rotate view</li>
              <li><strong>Click palette:</strong> Select materials/objects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;