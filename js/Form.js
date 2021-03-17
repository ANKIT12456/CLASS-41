class Form {

  constructor() {
    this.input = createInput("ENTER YOUR NAME");
    this.button = createButton('PLAY');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton("RESTART");
    this.msg1=createElement('h2');
    this.msg2=createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
    this.input.size(500,50);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.size(200,50);
    //this.button{font-size:10 px};
    this.reset.position(displayWidth-100,20);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      Player.updateRank(0);
      game.update(0);
    })

  }
}
