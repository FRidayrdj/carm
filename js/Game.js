class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('GameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
    GameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var data=await database.ref('PlayerCount').once('value')
     if( data.exists())
     {
       playerCount=data.val();
       player.getCount();
     }
     
      form = new Form()
      form.display();
    }
    car1 = createSprite (300,200,100,100);
    car2 = createSprite (500,200,100,100);
    car3 = createSprite (700,200,100,100);
    car4 = createSprite (900,200,100,100);
    cars=[car1,car2,car3,car4]
  }

  play()
  {
    
    
      form.hide();
     
      Player.getpInfo();
      if(allPlayers != undefined )
      {
       var index = 0;
       var x = 300;
       var y = 0;
      for(var i in allPlayers)
      {
        index += 1;
        x+=200;
        y = height-allPlayers[i].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(i === "player"+player.index){
        cars[index-1].shapeColor=('red');
        camera.position.x=width/2;
        camera.position.y = cars[index-1].y;
        }
        else
        {
          cars[index-1].shapeColor=('black');

        }
        
        
      }
      }
      if (keyIsDown(UP_ARROW)&&player.index != null)
      {
        player.distance += 50;
        player.update();
      }
      
    
    drawSprites();
  }

}
