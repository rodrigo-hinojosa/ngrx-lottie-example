import { NgModule } from '@angular/core';
import { AnimationOneComponent } from './animation-one/animation-one.component';
import { SharedModule } from '../shared/shared.module';
import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsContainerComponent } from './animations-container/animations-container.component';
import { AnimationTwoComponent } from './animation-two/animation-two.component';
import { LottieModule } from 'ngx-lottie';
import { AnimationThreeComponent } from './animation-three/animation-three.component';

@NgModule({
    declarations: [
        AnimationOneComponent,
        AnimationsContainerComponent,
        AnimationTwoComponent,
        AnimationThreeComponent
    ],
    imports: [
        LottieModule,
        SharedModule,
        AnimationsRoutingModule
    ]
})
export class AnimationsModule { }
