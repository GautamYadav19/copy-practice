import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FithPartComponent } from './component/fith-part/fith-part.component';
import { TextCenterComponent } from './component/text-center/text-center.component';
import { ImageSilderComponent } from './component/image-silder/image-silder.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FithPartComponent,
    TextCenterComponent,
    ImageSilderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
