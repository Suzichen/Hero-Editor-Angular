// 英雄详情模块 
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/add/operator/switchMap";

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    // 通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性
    // @Input() heroDetail: Hero;
    heroDetail: Hero;

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.paramMap
            .switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.heroDetail = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.heroDetail)
            .then(() => this.goBack())
    }
}

/* 
    <hero-detail [hero]="selectedHero"></hero-detail>详解：
    父组件 App 会告诉子组件 HeroDetail 要显示哪个英雄，
    告诉的方法是把它的 selectedHero 属性绑定到HeroDetail组件的heroheroDetail属性上
    在等号的左边，是方括号围绕的hero属性，这表示它是属性绑定表达式的目标。
    我们要绑定到的目标属性必须是一个输入属性，否则Angular会拒绝绑定，并抛出一个错误。
 */ 