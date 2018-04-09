import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgxWebGlModule } from './webGLLibrary';
import { SpheresComponent } from './components/spheres/spheres.component';


@NgModule({
  declarations: [
    AppComponent,
    SpheresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebGlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
