export const GameConfig = {
  width: 1200,
  height: 800,
  backgroundColor: '#87CEEB',
  gridSize: 32,
  gridWidth: 20,
  gridHeight: 20,
  tileHeight: 16,
  
  materials: {
    GRASS: { id: 'grass', color: 0x4ade80, name: 'Grass' },
    SAND: { id: 'sand', color: 0xfbbf24, name: 'Sand' },
    EARTH: { id: 'earth', color: 0xa3541f, name: 'Earth' },
    WATER: { id: 'water', color: 0x3b82f6, name: 'Water' }
  },
  
  objects: {
    TREE: { id: 'tree', color: 0x22c55e, name: 'Tree', emoji: '🌳' },
    STONE: { id: 'stone', color: 0x6b7280, name: 'Stone', emoji: '🪨' },
    ANIMAL: { id: 'animal', color: 0xf59e0b, name: 'Animal', emoji: '🐎' }
  }
};