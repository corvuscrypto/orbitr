var System = function(){
  this.bodies = [];
}

System.prototype.addBody = function(body){
  this.bodies.push(body);
}

System.prototype._adjustAccelerations = function(){
  for (var i in this.bodies){
    var body = this.bodies[i];
    body.calculateDelta(this.bodies);
  }
}

System.prototype.init = function(){
  setInterval(this._adjustAccelerations, 16);
}
