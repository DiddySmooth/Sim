import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { init, GameLoop, Sprite, initKeys, keyPressed } from 'kontra';
import { CitizenListService } from '../../Services/citizen-list.service';
import { ICitizen } from '../../Interfaces/ICitizen';
@Component({
  selector: 'app-display-screen',
  templateUrl: './display-screen.component.html',
  styleUrl: './display-screen.component.sass',
})
export class DisplayScreenComponent implements OnInit {
  @ViewChild('gameCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  citizens: ICitizen[] = [];
  cits: any = [];
  canH: number = 0;
  canW: number = 0;
  constructor(
    private elementRef: ElementRef,
    private citizenListService: CitizenListService
  ) {}

  onWindowResize() {
    // Call resizeCanvas() whenever window is resized
    this.resizeCanvas();
  }

  private resizeCanvas() {
    const canvas = this.elementRef.nativeElement.querySelector('#game-canvas');
    const container =
      this.elementRef.nativeElement.querySelector('#canvas-container');
    this.canW = container.offsetWidth;
    this.canH = container.offsetWidth;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  generateCitSprites() {
    for (let cit of this.citizens) {
      let sprite = Sprite({
        x: Math.floor(Math.random() * this.canH),
        y: Math.floor(Math.random() * this.canW),
        width: 4,
        height: 4,
        color: 'red',
      });
      this.cits.push(sprite);
    }
  }
  ngOnInit(): void {
    this.resizeCanvas();
    const canvas = this.canvasRef.nativeElement;

    this.citizenListService.citizens.subscribe((citizens: ICitizen[]) => {
      this.citizens = citizens;
    });

    init(canvas);
    initKeys();
    this.generateCitSprites();

    // Define game loop
    const loop = GameLoop({
      update: () => {},
      render: () => {
        const context = canvas.getContext('2d')!;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let npc of this.cits) {
          npc.render();
        }
      },
    });

    // Start the game loop
    loop.start();
  }
  citMovement(){

  }
}


