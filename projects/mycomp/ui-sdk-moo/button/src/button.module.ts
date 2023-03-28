import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { I18nModule } from 'ui-sdk-moo/i18n';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, I18nModule,
    CodeEditorModule.forRoot()
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
