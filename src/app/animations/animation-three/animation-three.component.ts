import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animation-three',
  templateUrl: './animation-three.component.html',
  styleUrls: ['./animation-three.component.scss']
})
export class AnimationThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    options: AnimationOptions = {
        path: '/assets/animation3.json',
    };

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

}
