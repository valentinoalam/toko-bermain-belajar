import * as Phaser from 'phaser';
import { GameConfig } from './GameConfig';
import { TerrainManager } from './TerrainManager';
import { IsometricRenderer } from './IsometricRenderer';

export class GameScene extends Phaser.Scene {
  private terrainManager!: TerrainManager;
  private renderer!: IsometricRenderer;
  private currentTool: string = 'grass';
  private currentMode: 'terrain' | 'object' = 'terrain';
  private cameraAngle: number = 0;
  private isDragging: boolean = false;
  private lastPointer: { x: number; y: number } = { x: 0, y: 0 };
  
  constructor() {
    super({ key: 'GameScene' });
  }
  
  create(): void {
    // Initialize managers
    this.terrainManager = new TerrainManager(this);
    this.renderer = new IsometricRenderer(this, this.terrainManager);
    
    // Center the view
    this.renderer.setPosition(this.cameras.main.centerX, this.cameras.main.centerY - 50);
    
    // Setup input
    this.input.on('pointerdown', this.onPointerDown, this);
    this.input.on('pointerup', this.onPointerUp, this);
    this.input.on('pointermove', this.onPointerMove, this);
    this.input.keyboard?.on('keydown-Q', () => this.rotateCamera(-Math.PI / 2));
    this.input.keyboard?.on('keydown-E', () => this.rotateCamera(Math.PI / 2));
    
    // Create UI
    this.createUI();
  }
  
  private createUI(): void {
    // Material palette
    const materials = Object.values(GameConfig.materials);
    materials.forEach((material, index) => {
      const button = this.add.rectangle(60 + index * 70, 60, 60, 40, material.color)
        .setInteractive()
        .setStrokeStyle(3, this.currentTool === material.id ? 0xffffff : 0x000000);
      
      const text = this.add.text(button.x, button.y + 30, material.name, {
        fontSize: '12px',
        color: '#000000',
        align: 'center'
      }).setOrigin(0.5);
      
      button.on('pointerdown', () => {
        this.currentTool = material.id;
        this.currentMode = 'terrain';
        this.updateUI();
      });
    });
    
    // Object palette
    const objects = Object.values(GameConfig.objects);
    objects.forEach((object, index) => {
      const button = this.add.rectangle(60 + index * 70, 140, 60, 40, object.color)
        .setInteractive()
        .setStrokeStyle(3, this.currentTool === object.id && this.currentMode === 'object' ? 0xffffff : 0x000000);
      
      const emoji = this.add.text(button.x, button.y - 5, object.emoji, {
        fontSize: '20px'
      }).setOrigin(0.5);
      
      const text = this.add.text(button.x, button.y + 30, object.name, {
        fontSize: '12px',
        color: '#000000',
        align: 'center'
      }).setOrigin(0.5);
      
      button.on('pointerdown', () => {
        this.currentTool = object.id;
        this.currentMode = 'object';
        this.updateUI();
      });
    });
    
    // Instructions
    this.add.text(20, this.cameras.main.height - 100, 
      'Controls:\n• Click to paint terrain/place objects\n• Q/E to rotate camera\n• Right-click drag to pan', {
      fontSize: '14px',
      color: '#000000',
      backgroundColor: 'rgba(255,255,255,0.8)',
      padding: { x: 10, y: 5 }
    });
    
    // Mode indicator
    this.add.text(this.cameras.main.width - 200, 30, 'Mode: ', {
      fontSize: '16px',
      color: '#000000',
      fontStyle: 'bold'
    });
    
    this.updateUI();
  }
  
  private updateUI(): void {
    // Update button borders
    this.children.list.forEach(child => {
      if (child instanceof Phaser.GameObjects.Rectangle && child.input?.enabled) {
        const materials = Object.values(GameConfig.materials);
        const objects = Object.values(GameConfig.objects);
        
        // Check if this is a material button
        const materialIndex = materials.findIndex(m => m.color === child.fillColor);
        if (materialIndex !== -1) {
          const isSelected = this.currentTool === materials[materialIndex].id && this.currentMode === 'terrain';
          child.setStrokeStyle(3, isSelected ? 0xffffff : 0x000000);
        }
        
        // Check if this is an object button
        const objectIndex = objects.findIndex(o => o.color === child.fillColor);
        if (objectIndex !== -1) {
          const isSelected = this.currentTool === objects[objectIndex].id && this.currentMode === 'object';
          child.setStrokeStyle(3, isSelected ? 0xffffff : 0x000000);
        }
      }
    });
  }
  
  private onPointerDown(pointer: Phaser.Input.Pointer): void {
    this.lastPointer = { x: pointer.x, y: pointer.y };
    
    if (pointer.rightButtonDown()) {
      this.isDragging = true;
    } else {
      this.handleTileInteraction(pointer);
    }
  }
  
  private onPointerUp(pointer: Phaser.Input.Pointer): void {
    this.isDragging = false;
  }
  
  private onPointerMove(pointer: Phaser.Input.Pointer): void {
    if (this.isDragging && pointer.rightButtonDown()) {
      const deltaX = pointer.x - this.lastPointer.x;
      const deltaY = pointer.y - this.lastPointer.y;
      
      const container = this.renderer.getContainer();
      this.renderer.setPosition(
        container.x + deltaX,
        container.y + deltaY
      );
    }
    
    if (pointer.isDown && !pointer.rightButtonDown()) {
      this.handleTileInteraction(pointer);
    }
    
    this.lastPointer = { x: pointer.x, y: pointer.y };
  }
  
  private handleTileInteraction(pointer: Phaser.Input.Pointer): void {
    // Convert screen coordinates to world coordinates
    const container = this.renderer.getContainer();
    const worldX = pointer.x - container.x;
    const worldY = pointer.y - container.y;
    
    // Get grid position
    const { x, y } = this.terrainManager.getGridPosition(worldX, worldY, this.cameraAngle);
    
    if (this.currentMode === 'terrain') {
      this.terrainManager.setTileMaterial(x, y, this.currentTool);
    } else {
      this.terrainManager.setTileObject(x, y, this.currentTool);
    }
    
    this.renderer.updateTileAt(x, y);
  }
  
  private rotateCamera(angle: number): void {
    this.cameraAngle += angle;
    
    this.tweens.add({
      targets: this.renderer.getContainer(),
      rotation: this.cameraAngle,
      duration: 300,
      ease: 'Power2'
    });
  }
}