function Planet(mass){
  var posX = (Math.random()*700)+50;
  var posY = (Math.random()*500)+50;
  this.mass = Math.pow(10,mass);
  //make the element
  var elem = $("<div class='planet'></div>")
  var colors = [parseInt(Math.random()*128)+128, parseInt(Math.random()*128)+128, parseInt(Math.random()*128)+128];
  var radius = (mass*100/5);
  $(".game-screen").append(elem);
  this.elem = elem;
  this.posX = posX;
  this.posY = posY;
  console.log("rgb("+colors[0]+","+colors[1]+","+colors[2]+")")
  elem.css({
    "background-color":"rgb("+colors[0]+","+colors[1]+","+colors[2]+")",
    "width": radius+'px',
    "height": radius+'px',
    "left": posX+'px',
    "top": posY+'px',
  })
}

Planet.prototype.calculateDelta = function(bodies){
  var s=0;
  for(var i in bodies){
    var body = bodies[i];
    if (body === this){
      console.log(body.mass);
    } else {
    }
  }
}
