import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
// 从RxJS库中导入toPromise方法
import 'rxjs/add/operator/toPromise'

import { Hero } from './hero';

@Injectable()
export class HeroService {
    // getHeroes(): void {}

    // getHeroes(): Hero[] {    //直接获取数据
    //     return HEROES;
    // }

    /* getHeroes(): Promise<Hero[]> {  // 异步获取数据
        return Promise.resolve(HEROES);
    } */
    // 设置路径和头部
    private heroesUrl = 'api/heroes';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    constructor(private http: Http) { }

    // 获取英雄列表
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    
    getHeroesSlowly(): Promise<Hero[]> {  // 异步获取数据(模拟慢网速)
        return new Promise(resolve => {
            // 延迟两秒执行 
            setTimeout(() => resolve(this.getHeroes()),2000)
        })
    }
    // 获取英雄
    getHero(id: number): Promise<Hero> {
        // 根据id从getHeroes()中过滤英雄列表。
        // return this.getHeroes()
        //     .then(heroes => heroes.find(
        //         hero => hero.id === id
        //     ));
        
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
    // 更新英雄
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    // 抛出错误
    private handleError(error: any): Promise<any> {
        console.error('出现了一个错误：', error);   //仅用于Demo演示
        return Promise.reject(error.message || error);
    }
}