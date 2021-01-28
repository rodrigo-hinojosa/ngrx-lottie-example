import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animation-two',
  templateUrl: './animation-two.component.html',
  styleUrls: ['./animation-two.component.scss']
})
export class AnimationTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    options: AnimationOptions = {
        path: '/assets/animation2.json',
    };

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

}
