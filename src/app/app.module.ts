// 模块管理 
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入formsModule模块
import { FormsModule }   from '@angular/forms';
// 导入英雄详情组件
import { HeroDetailComponent } from './hero-detail.component';
// 导入主组件
import { AppComponent }  from './app.component';
// 当前应用正在使用的模块列表↓
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
