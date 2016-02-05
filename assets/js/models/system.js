function _System(){
  this.bodies = [];
  this.addBody = function(body){
    this.bodies.push(body);
  }.bind(this)

  this._adjustAccelerations = function(){
    var bodies = this.bodies;
    var q = window.async.queue(function(){}, 10);
    for (var i in bodies){
      var body = bodies[i];
      q.push(body.calculateDelta(bodies));
    }
  }.bind(this)

  this.init = function(){
    setInterval(this._adjustAccelerations, 3000);
  }.bind(this)
}

var System = function(){
  return new _System();
}()
