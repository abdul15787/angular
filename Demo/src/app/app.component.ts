import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}. This is my first view.</h1>`,
})
export class AppComponent  { name = 'World'; }
