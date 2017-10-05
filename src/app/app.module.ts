import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入formsModule模块
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
// 当前应用正在使用的外部模块列表↓
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
