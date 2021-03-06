// 主模块 
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from "@angular/router";

// 组件部分
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html', 
  styleUrls: [ './heroes.component.css' ]
})

// 业务逻辑
export class HeroesComponent implements OnInit  { 
  // heroer = HEROES;
  heroes: Hero[]; // 一个尚未初始化的heroes属性
  selectedHero: Hero;

  // heroService = new HeroService(); // don't do this
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //将点击的hero赋值给selectedHero
  };
}

