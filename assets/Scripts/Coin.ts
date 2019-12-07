

const {ccclass, property} = cc._decorator;

@ccclass
export default class Coin extends cc.Component {    

    @property 
    vector: cc.Vec2 = new cc.Vec2(1,2); 
    isMoving: boolean = false; 
    @property 
    speed: number = 1000;
    dt_count = 0;
    @property 
    dt_stop = 22;
    @property 
    coint_name: String = "";

    @property 
    control_name: String = "";

    @property(cc.Node)
    userControls: cc.Node = null;
    @property(cc.Node) 
    bankerControls: cc.Node = null;   

    xStart: number;
    yStart: number;

    onLoad () {  
        this.userControls.on('move_event', this.onMoveCustom, this);   
        this.bankerControls.on('move_event', this.onMoveCustom, this);        
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this); 
        this.xStart = this.node.x;
        this.yStart = this.node.y; 
    }
    onMoveCustom(name: String): any {  
        if(name == "player" || name == "banker")    {           
            this.control_name = name;
            this.node.x = this.xStart;
            this.node.y = this.yStart;  
        }
    }
    onMouseDown(e: cc.Touch) {
        if(this.control_name != "")   
            this.isMoving = true;             
    }  

    update (dt) {  
        if(this.isMoving)
        {
            this.dt_count++;
            if(this.dt_count < this.dt_stop) {  
                switch(this.coint_name) { 
                    case "1": {
                        this.control_name == "player" ? (this.node.x += this.vector.x * dt + this.speed) : (this.node.x += this.vector.x * (dt/3) + this.speed*3);
                        this.node.y += this.vector.y * dt + this.speed; 
                        break;
                    } 
                    case "1k": {
                        this.control_name == "player" ? (this.node = this.node) : (this.node.x += this.vector.x * (dt/3) + this.speed*2);                      
                        this.node.y += this.vector.y * dt + this.speed; 
                        break;
                    } 
                    case "10": {
                        this.control_name == "player" ? (this.node.x += this.vector.x * dt - this.speed) : (this.node.x += this.vector.x * (dt/3) + this.speed);  
                    this.node.y += this.vector.y * dt + this.speed; 
                        break;
                    } 
                    case "100": {
                        this.control_name == "player" ? (this.node.x += this.vector.x * (dt/3) - this.speed) : (this.node = this.node);;
                    this.node.y += this.vector.y * (dt*3) + this.speed/1.6; 
                        break;
                    } 
                    case "500": {
                        this.control_name == "player" ? (this.node.x += this.vector.x * (dt/3) - this.speed) : (this.node.x -= this.vector.x * (dt/3) + this.speed/2.5); 
                        this.node.y += this.vector.y * (dt*3) + this.speed/1.9;
                        break;
                    }    
                }              
                            
            }
            else{
                this.dt_count = 0;
                this.isMoving = false; 
            }            
             
        }
    }
}
