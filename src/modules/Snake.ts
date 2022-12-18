class Snake{
    // 获取蛇容器
    element:HTMLElement;
    // 表示蛇头的元素
    head:HTMLElement;
    // 蛇的身体，包括蛇头
    // HTML DOM 中的 HTMLCollection 是“活”的；如果基本的文档改变时，那些改变通过所有 HTMLCollection 对象会立即显示出来。

    bodies:HTMLCollection;
    constructor(){
        this.element=document.getElementById('snake')!;
        this.head=document.querySelector('#snake > div') as HTMLElement;
        this.bodies=this.element.getElementsByTagName('div');
    }
    // 获取蛇头的位置
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(value:number){
        this.head.style.left=value+'px';
    }

    set Y(value:number){
        this.head.style.top=value+'px';
    }

    // 蛇增加长度
    addBody(){
        // 像snake增加div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}

export default Snake;