import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'ui-sdk-moo/button';
import { UiSdkModule } from 'ui-sdk-moo';
import { AppComponent } from './app.component';
import { CardComponent } from 'ui-sdk-moo/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiSdkModule, ButtonModule, CardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
