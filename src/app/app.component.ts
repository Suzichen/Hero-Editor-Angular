import { Component } from '@angular/core';

// 创建Hero对象
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} 详情</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="输入名字实现双向绑定">
    </div>
  `,
})

export class AppComponent  { 
  title = '英雄列表:';
  hero: Hero = {
    id: 1,
    name: '苏子晨'
  }
}

