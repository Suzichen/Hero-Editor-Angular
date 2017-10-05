import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>你好 {{name}}</h1>`,
})
export class AppComponent  { name = '英雄'; }
