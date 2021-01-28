import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
    return player;
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LottieModule.forRoot({ player: playerFactory }),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
