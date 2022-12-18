// 当蛇的的偏移量和食物的偏移量相等时表示吃到食物；

class Food{
    element:HTMLElement;
    constructor(){
        // /!表示排除null 和 underfined
        this.element=document.getElementById('food')!;
    }
    // 定义一个获取x轴坐标方法
    get x(){
        return this.element.offsetLeft;
    }
    // 定义一个获取y轴坐标的方法
    get y(){
        return this.element.offsetTop;
    }
    change(){
        /**
         * 生成一个随机的位置
         * 食物的位置最小是0，最大290px
         * 蛇移动一次就是一格，一格大小就是10，所以要求食物的位置是10的倍数
         */
        let top=Math.floor(Math.random()*30)*10;
        let left=Math.floor(Math.random()*30)*10;
        this.element.style.left=left+'px';
        this.element.style.top=top+'px';
    }
}

export default Food;