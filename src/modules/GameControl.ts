// 游戏控制器，控制其他类，组合其他类  
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;
    direction:string=""; // 蛇的移动方向
    // 判断游戏是否结束
    isLive=true
    constructor(){
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel= new ScorePanel();
        this.init()
    }
    // 初始化；
    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }
    keydownHandler(event:KeyboardEvent){
        // 需要检查按键的值是否是上下左右
        this.direction=event.key
    }
    // 蛇移动   ArrowDown  ArrowLeft  ArrowDown  ArrowRight
    run(){
        /**
         * 根据direction 来使蛇的位置改变
         * 向上 top减少
         * 向下 top增加
         * 向左 left 减少
         * 向右 left 增加
         */
        // 获取蛇现在的位置
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.direction){
            case 'ArrowDown':
            case 'Down':
                Y+=10;
                break;
            case 'ArrowUp':
            case 'Up':
                Y-=10;
                break;
            case 'ArrowRight':
            case 'Right':
                X+=10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X-=10;
                break;
        }

        this.snake.X=X
        this.snake.Y=Y
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }
}

export default GameControl;