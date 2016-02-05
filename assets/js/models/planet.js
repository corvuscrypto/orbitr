function Planet(mass){
  var posX = (Math.random()*700)+50;
  var posY = (Math.random()*500)+50;
  this.mass = mass;
  //make the element
  var elem = $("<div class='planet'></div>")
  var colors = [parseInt(Math.random()*128)+128, parseInt(Math.random()*128)+128, parseInt(Math.random()*128)+128];
  var radius = (mass*100/5);
  $(".game-screen").append(elem);
  this.elem = elem;
  this.posX = posX;
  this.posY = posY;
  this.vX = 0;
  this.vY = 0;
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
      continue;
    }
    //otherwise calculate
    console.log(this.mass,this.posX, this.posY,body.mass, body.posX, body.posY)
    this._calculateUniversalLaw(body.mass, body.posX, body.posY);


  }
}

Planet.prototype._calculateUniversalLaw = function(m2, x, y){
  var m1 = this.mass*MASS_SCALE;
  m2 *= MASS_SCALE;
  var dx = (this.posX-x)*DIST_SCALE
  var dy = (this.posY-y)*DIST_SCALE
  var result = RESULT_SCALE*(m1*m2*G)/((dx*dx)+(dy*dy));
  console.log(result);
}
