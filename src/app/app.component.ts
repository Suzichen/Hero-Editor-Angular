import { Component } from '@angular/core';
import { Hero } from './hero';

// 模拟数据
const HEROES: Hero[] = [
  { id: 11, name: "张三" },
  { id: 12, name: "李四" },
  { id: 13, name: "王五" },
  { id: 14, name: "赵六" },
  { id: 15, name: "小明" },
  { id: 16, name: "小红" },
  { id: 17, name: "小李" },
  { id: 18, name: "小王" },
  { id: 19, name: "小张" },
  { id: 20, name: "苏子晨" },
]
// 组件部分
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>我的英雄：</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" 
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <hero-detail [heroDetail]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
// 业务逻辑
export class AppComponent  { 
  title = '英雄列表:';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //将点击的hero赋值给selectedHero
  }
}

