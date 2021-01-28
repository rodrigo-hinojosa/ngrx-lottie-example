import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationOneComponent } from './animation-one/animation-one.component';
import { AnimationTwoComponent } from './animation-two/animation-two.component';
import { AnimationsContainerComponent } from './animations-container/animations-container.component';

const routes: Routes = [
    {
        path: '',
        component: AnimationsContainerComponent,
        children: [
            {
                path: '',
                redirectTo: '1',
                pathMatch: 'full'
            },
            {
                path: '1',
                component: AnimationOneComponent
            },
            {
                path: '2',
                component: AnimationTwoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AnimationsRoutingModule { }

