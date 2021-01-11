class Form{
    constructor(){
        this.input  = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
        this.title = createElement('h2');

    }

    display(){
        
        this.title.html("car game"); 
        this.title.position(displayWidth/2 - 50 , 0  );
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80 );
        this.button.position(displayWidth/2 + 30 , displayHeight/4 );
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount ++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount) ;
            this.greeting.html(displayWidth/2 - 70 , displayHeight/4 );
            this.greeting.position(130,160);

        })
    }

        hide(){
            this.greeting.hide();
            this.input.hide();
            this.button.hide();
        }


}