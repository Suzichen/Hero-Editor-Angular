// 模块管理 
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 导入formsModule模块
import { FormsModule }   from '@angular/forms';
// 导入英雄详情组件
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
// 导入主组件
import { AppComponent }  from './app.component';
// 导入路由
import { RouterModule } from "@angular/router"; 
import { DashboardComponent } from './dashboard.component';

// 当前应用正在使用的模块列表↓
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    // 路由表 
    RouterModule.forRoot([
      // 这里使用了forRoot()方法，因为我们是在应用根部提供配置好的路由器。 
      // forRoot()方法提供了路由需要的路由服务提供商和指令
      // 并基于当前浏览器 URL 初始化导航。
      {
        path: 'heroes',   // 路由器会用它来匹配浏览器地址栏中的地址
        component: HeroesComponent  //导航到此路由时须创建的组件
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
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


