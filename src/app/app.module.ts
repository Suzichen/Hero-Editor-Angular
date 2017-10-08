// 模块管理 
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入formsModule模块
import { FormsModule }   from '@angular/forms';
// 导入主组件
import { AppComponent }  from './app.component';
// 导入英雄详情组件
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
// 导入路由
// import { RouterModule } from "@angular/router"; 
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';

// 当前应用正在使用的模块列表↓
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    // 路由表 
    AppRoutingModule
  ],
  // 组件声明
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  // 提供商
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


