class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    upScore:number;
    constructor(upScore:number=10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.upScore=upScore
    }
    addScore(){
        this.scoreEle.innerHTML= ++this.score+'';
        if(this.score% this.upScore === 0){
            this.levelUp()
        }
    }
    levelUp(){
        if(this.level<10){
            this.levelEle.innerHTML= ++this.level+'';
        }
    }
}
// const scorePanel=new ScorePanel()
// scorePanel.addScore();
// scorePanel.levelUp()
export default ScorePanel;