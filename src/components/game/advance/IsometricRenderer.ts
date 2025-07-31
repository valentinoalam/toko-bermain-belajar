import * as Phaser from 'phaser';
import { GameConfig } from './GameConfig';
import { TerrainManager } from './TerrainManager';

export class IsometricRenderer {
  private scene: Phaser.Scene;
  private terrainManager: TerrainManager;
  private tileGraphics: Phaser.GameObjects.Graphics[][];
  private objectSprites: Phaser.GameObjects.Text[][];
  private container: Phaser.GameObjects.Container;
  
  constructor(scene: Phaser.Scene, terrainManager: TerrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;
    this.tileGraphics = [];
    this.objectSprites = [];
    this.container = scene.add.container(0, 0);
    
    this.initializeGraphics();
  }
  
  private initializeGraphics(): void {
    for (let x = 0; x < GameConfig.gridWidth; x++) {
      this.tileGraphics[x] = [];
      this.objectSprites[x] = [];
      
      for (let y = 0; y < GameConfig.gridHeight; y++) {
        // Create tile graphics
        const graphics = this.scene.add.graphics();
        this.tileGraphics[x][y] = graphics;
        this.container.add(graphics);
        
        // Create object sprite
        const objectSprite = this.scene.add.text(0, 0, '', {
          fontSize: '24px',
          align: 'center'
        });
        objectSprite.setOrigin(0.5, 1);
        this.objectSprites[x][y] = objectSprite;
        this.container.add(objectSprite);
      }
    }
    
    this.updateAllTiles();
  }
  
  updateAllTiles(): void {
    const terrain = this.terrainManager.getAllTiles();
    
    for (let x = 0; x < GameConfig.gridWidth; x++) {
      for (let y = 0; y < GameConfig.gridHeight; y++) {
        this.updateTile(x, y, terrain[x][y]);
      }
    }
  }
  
  private updateTile(x: number, y: number, tile: any): void {
    const { isoX, isoY } = this.terrainManager.getIsometricPosition(x, y);
    const graphics = this.tileGraphics[x][y];
    const objectSprite = this.objectSprites[x][y];
    
    // Clear previous graphics
    graphics.clear();
    
    // Get material color
    const material = Object.values(GameConfig.materials).find(m => m.id === tile.material);
    const color = material ? material.color : 0x888888;
    
    // Draw isometric tile
    const tileWidth = GameConfig.gridSize;
    const tileHeight = GameConfig.gridSize / 2;
    const elevation = tile.height * GameConfig.tileHeight;
    
    // Top face
    graphics.fillStyle(color);
    graphics.beginPath();
    graphics.moveTo(isoX, isoY - elevation);
    graphics.lineTo(isoX + tileWidth / 2, isoY + tileHeight / 2 - elevation);
    graphics.lineTo(isoX, isoY + tileHeight - elevation);
    graphics.lineTo(isoX - tileWidth / 2, isoY + tileHeight / 2 - elevation);
    graphics.closePath();
    graphics.fillPath();
    
    // Add subtle texture effect
    if (tile.material !== 'water') {
      const colorObj = Phaser.Display.Color.IntegerToColor(color);
      graphics.fillStyle(Phaser.Display.Color.GetColor32(
        colorObj.red * 0.8,
        colorObj.green * 0.8,
        colorObj.blue * 0.8,
        255
      ));
      
      // Add small texture dots
      for (let i = 0; i < 3; i++) {
        const dotX = isoX + (Math.random() - 0.5) * tileWidth * 0.6;
        const dotY = isoY - elevation + (Math.random() - 0.5) * tileHeight * 0.6;
        graphics.fillCircle(dotX, dotY, 1);
      }
    } else {
      // Water animation effect
      graphics.fillStyle(0x1e40af, 0.3);
      graphics.fillCircle(isoX, isoY - elevation, tileWidth / 4);
    }
    
    // Left face (for elevation)
    if (tile.height > 0) {
      const colorObj = Phaser.Display.Color.IntegerToColor(color);
      graphics.fillStyle(Phaser.Display.Color.GetColor32(
        colorObj.red * 0.7,
        colorObj.green * 0.7,
        colorObj.blue * 0.7,
        255
      ));
      
      graphics.beginPath();
      graphics.moveTo(isoX - tileWidth / 2, isoY + tileHeight / 2 - elevation);
      graphics.lineTo(isoX - tileWidth / 2, isoY + tileHeight / 2);
      graphics.lineTo(isoX, isoY + tileHeight);
      graphics.lineTo(isoX, isoY + tileHeight - elevation);
      graphics.closePath();
      graphics.fillPath();
    }
    
    // Right face (for elevation)
    if (tile.height > 0) {
      const colorObj = Phaser.Display.Color.IntegerToColor(color);
      graphics.fillStyle(Phaser.Display.Color.GetColor32(
        colorObj.red * 0.6,
        colorObj.green * 0.6,
        colorObj.blue * 0.6,
        255
      ));
      
      graphics.beginPath();
      graphics.moveTo(isoX + tileWidth / 2, isoY + tileHeight / 2 - elevation);
      graphics.lineTo(isoX, isoY + tileHeight - elevation);
      graphics.lineTo(isoX, isoY + tileHeight);
      graphics.lineTo(isoX + tileWidth / 2, isoY + tileHeight / 2);
      graphics.closePath();
      graphics.fillPath();
    }
    
    // Update object sprite
    objectSprite.setPosition(isoX, isoY - elevation - 10);
    if (tile.object) {
      const objectConfig = Object.values(GameConfig.objects).find(o => o.id === tile.object);
      objectSprite.setText(objectConfig ? objectConfig.emoji : '');
      objectSprite.setVisible(true);
    } else {
      objectSprite.setVisible(false);
    }
  }
  
  updateTileAt(x: number, y: number): void {
    const tile = this.terrainManager.getTile(x, y);
    if (tile) {
      this.updateTile(x, y, tile);
    }
  }
  
  setRotation(angle: number): void {
    this.container.setRotation(angle);
  }
  
  setPosition(x: number, y: number): void {
    this.container.setPosition(x, y);
  }
  
  getContainer(): Phaser.GameObjects.Container {
    return this.container;
  }
}