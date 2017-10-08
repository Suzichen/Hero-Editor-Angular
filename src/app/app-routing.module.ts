import { NgModule } from '@angular/core';

// 导入路由
import { RouterModule, Routes } from "@angular/router"; 
import { DashboardComponent } from './dashboard.component';
// 导入英雄详情组件
import { HeroesComponent } from "./heroes.component";
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',   // 路由器会用它来匹配浏览器地址栏中的地址
        component: HeroesComponent  //导航到此路由时须创建的组件
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}