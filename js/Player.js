class Player {
  constructor()
  {
    this.index=null;
    this.distance=0;
    this.name=null;
    
  }

  getCount(){
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }

  update()
  {
    var playerIndex = "players/player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getpInfo()
  {
    database.ref('players').on('value',(data)=> {
      allPlayers=data.val();
    })
    
  }
}
