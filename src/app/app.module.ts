// 模块管理 
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入formsModule模块
import { FormsModule }   from '@angular/forms';
// 导入http服务
import { HttpModule } from "@angular/http";
// 模拟服务
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
// 导入主组件
import { AppComponent }  from './app.component';
// 导入英雄详情组件
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
// 导入路由
// import { RouterModule } from "@angular/router"; 
import { AppRoutingModule } from './app-routing.module';
// 导入仪表盘组件
import { DashboardComponent } from './dashboard.component';

// 当前应用正在使用的模块列表↓
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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


