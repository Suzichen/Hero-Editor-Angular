import { Injectable } from '@angular/core';

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
    // getHeroes(): void {}

    // getHeroes(): Hero[] {    //直接获取数据
    //     return HEROES;
    // }

    getHeroes(): Promise<Hero[]> {  // 异步获取数据
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly(): Promise<Hero[]> {  // 异步获取数据(模拟慢网速)
        return new Promise(resolve => {
            // 延迟两秒执行 
            setTimeout(() => resolve(this.getHeroes()),2000)
        })
    }
}