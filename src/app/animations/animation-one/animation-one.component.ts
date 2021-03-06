import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-animation-one',
    templateUrl: './animation-one.component.html',
    styleUrls: ['./animation-one.component.scss']
})
export class AnimationOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    options: AnimationOptions = {
        path: '/assets/animation1.json',
    };

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

}
