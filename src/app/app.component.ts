import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard"
            routerLinkActive="active">仪表盘</a>

            <a routerLink="/heroes"
            routerLinkActive="active">英雄们</a>
        </nav>
        <router-outlet></router-outlet>   
    `,
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    title = `英雄列表`;
}