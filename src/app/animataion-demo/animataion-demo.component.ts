import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animataion-demo',
  templateUrl: './animataion-demo.component.html',
  styleUrls: ['./animataion-demo.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100px',
        backgroundColor: 'aqua'
      })),
      state('close', style({
        height: '50px',
        backgroundColor: 'green'
      })),
      transition('open=>close', [
        animate('2s')
      ]),
      transition('close=>open', [
        animate('1s')
      ])
    ])
  ]
})
export class AnimataionDemoComponent implements OnInit {

  isOpen=true

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen=!this.isOpen
  }
}
