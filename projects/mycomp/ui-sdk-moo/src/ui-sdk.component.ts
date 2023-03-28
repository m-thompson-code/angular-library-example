import { Component, OnInit } from '@angular/core';
// import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'lib-ui-sdk-moo',
  template: `
    <p>
      {{ 'hello world' | translate }}
    </p>



  `,
  styles: [],
})
export class UiSdkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
