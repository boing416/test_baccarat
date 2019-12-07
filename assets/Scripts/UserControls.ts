const {ccclass, property} = cc._decorator;

@ccclass
export default class UserControls extends cc.Component {  
 
    CointNumber: number = 1;
    @property
    NodeName: String = "";    

    onLoad () { 
       this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
       this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLEAVE, this);
       this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this); 
    }    
    onMouseDown(e: cc.Touch) {
        this.node.emit("move_event", this.NodeName);         
    }
    onMouseEnter() {    
        this.node.opacity = 255;        
    }
    onMouseLEAVE() {   
        this.node.opacity = 0; 
    }
}
