// 主模块 
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

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
  `],
  // 把 HeroService 定义为 AppComponent 的一个提供商。
  providers: [HeroService]
})

// 业务逻辑
export class AppComponent  { 
  title = '英雄列表:';
  // heroer = HEROES;
  heroes: Hero[]; // 一个尚未初始化的heroes属性
  selectedHero: Hero;

  // heroService = new HeroService(); // don't do this
  constructor(private heroService: HeroService) {
    // 构造函数自己什么也不用做，它在参数中定义了一个私有的heroService属性，
    // 并把它标记为注入HeroService的靶点。 

    // 现在，当创建AppComponent实例时，
    // Angular知道需要先提供一个HeroService的实例。
  };
  
  // this.heroes = this.heroService.getHeroes();
  getHeroes(): void {
    // var _this = this;
    // this.heroService.getHeroes()
    //    .then(function (heroes) { 
    //        return _this.heroes = heroes; 
    //    });
    // ES6更简洁,且能更优雅地处理this指针 ↓ 
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
    // 模拟慢网速情况 ↓ 
    // this.heroService.getHeroesSlowly()
    //   .then(heroes => this.heroes = heroes);
  }

  // 生命周期钩子: 初始化动作
  // 须在import中声明OnInit
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //将点击的hero赋值给selectedHero
  };
}

