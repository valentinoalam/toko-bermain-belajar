import { GameConfig } from './GameConfig';

export interface TerrainTile {
  x: number;
  y: number;
  material: string;
  height: number;
  object?: string;
}

export class TerrainManager {
  private terrain: TerrainTile[][];
  private scene: Phaser.Scene;
  
  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.terrain = [];
    this.initializeTerrain();
  }
  
  private initializeTerrain(): void {
    for (let x = 0; x < GameConfig.gridWidth; x++) {
      this.terrain[x] = [];
      for (let y = 0; y < GameConfig.gridHeight; y++) {
        this.terrain[x][y] = {
          x,
          y,
          material: 'water',
          height: 0,
          object: undefined
        };
      }
    }
  }
  
  getTile(x: number, y: number): TerrainTile | null {
    if (x < 0 || x >= GameConfig.gridWidth || y < 0 || y >= GameConfig.gridHeight) {
      return null;
    }
    return this.terrain[x][y];
  }
  
  setTileMaterial(x: number, y: number, material: string): void {
    const tile = this.getTile(x, y);
    if (tile) {
      tile.material = material;
      tile.height = material === 'water' ? 0 : 1;
    }
  }
  
  setTileObject(x: number, y: number, objectId: string | undefined): void {
    const tile = this.getTile(x, y);
    if (tile && tile.material !== 'water') {
      tile.object = objectId;
    }
  }
  
  getAllTiles(): TerrainTile[][] {
    return this.terrain;
  }
  
  getIsometricPosition(x: number, y: number): { isoX: number; isoY: number } {
    const isoX = (x - y) * (GameConfig.gridSize / 2);
    const isoY = (x + y) * (GameConfig.gridSize / 4);
    return { isoX, isoY };
  }
  
  getGridPosition(worldX: number, worldY: number, cameraAngle: number): { x: number; y: number } {
    // Apply inverse rotation to world coordinates first
    const cos = Math.cos(-cameraAngle);
    const sin = Math.sin(-cameraAngle);
    const rotatedX = worldX * cos - worldY * sin;
    const rotatedY = worldX * sin + worldY * cos;
    
    // Convert rotated isometric coordinates to grid coordinates
    const gridX = Math.floor((rotatedX / (GameConfig.gridSize / 2) + rotatedY / (GameConfig.gridSize / 4)) / 2);
    const gridY = Math.floor((rotatedY / (GameConfig.gridSize / 4) - rotatedX / (GameConfig.gridSize / 2)) / 2);
    
    return { x: gridX, y: gridY };
  }
}