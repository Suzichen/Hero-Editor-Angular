// 英雄详情模块 
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="heroDetail">
            <h2>{{heroDetail.name}} 英雄详情</h2>
            <div><label>id: </label>{{heroDetail.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="heroDetail.name" placeholder="name"/>
            </div>
        </div>
    `
})

export class HeroDetailComponent {
    // 通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性
    @Input() heroDetail: Hero;
}

/* 
    <hero-detail [hero]="selectedHero"></hero-detail>详解：
    父组件 App 会告诉子组件 HeroDetail 要显示哪个英雄，
    告诉的方法是把它的 selectedHero 属性绑定到HeroDetail组件的heroheroDetail属性上
    在等号的左边，是方括号围绕的hero属性，这表示它是属性绑定表达式的目标。
    我们要绑定到的目标属性必须是一个输入属性，否则Angular会拒绝绑定，并抛出一个错误。
 */ 