export class FirstTS{
    private name = '';
    public constructor(newName: string){
        this.name = newName;
    }
    public getGreetText():string{
        return `${this.name}さん.Vue.jsとTypeScriptの世界にようこそ！`;
    }
}