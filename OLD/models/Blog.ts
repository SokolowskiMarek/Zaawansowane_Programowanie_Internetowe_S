class Blog{

    static _objectCounter:number;

    constructor(private _id:number,
                private _name:string,
                private _author:Author,
                private _articles:Article[]){}

    public addArticle(article:Article):void{
        this._articles.push(article);
    }

    public getArticleTitles():string[]{
        const titles: string[]=[];
        for(const article of this._articles){
            titles.push(article.title);
        }
        return titles;
    }

    public getArticle(index:number): Article | undefined{
        if(index >= 0 && index < this._articles.length){
            return this._articles[index];
        }else{
            return undefined;
        }
    }
}