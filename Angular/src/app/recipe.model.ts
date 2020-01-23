export class Recipe {
    public name: string;
    public desc: string;
    public path: string;
    public count : number = 0;
    
    constructor(Rname: string, Rdesc: string, Rpath: string) {
        this.name = Rname;
        this.desc = Rdesc;
        this.path = Rpath;
        this.count = this.count++;
    }
}