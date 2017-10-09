import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: '普通英雄' },
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
        return {heroes};
    }
}