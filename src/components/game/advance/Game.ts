import * as Phaser from 'phaser';
import { GameConfig } from './GameConfig';
import { GameScene } from './GameScene';

export class Game {
  private game: Phaser.Game;
  
  constructor(parent: string) {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: GameConfig.width,
      height: GameConfig.height,
      parent: parent,
      backgroundColor: GameConfig.backgroundColor,
      scene: [GameScene],
      physics: {
        default: 'arcade',
        arcade: {
          debug: false
        }
      },
      input: {
        mouse: {
          target: parent
        }
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
    };
    
    this.game = new Phaser.Game(config);
  }
  
  destroy(): void {
    if (this.game) {
      this.game.destroy(true);
    }
  }
}