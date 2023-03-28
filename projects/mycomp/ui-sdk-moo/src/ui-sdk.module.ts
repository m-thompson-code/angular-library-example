import { NgModule } from '@angular/core';
import { UiSdkComponent } from './ui-sdk.component';
import { I18nModule } from 'ui-sdk-moo/i18n';
@NgModule({
  declarations: [UiSdkComponent],
  imports: [
    I18nModule
  ],
  exports: [UiSdkComponent],
})
export class UiSdkModule {}
