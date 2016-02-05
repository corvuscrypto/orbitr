requirejs(['models/system','models/planet','models/constants'], function(){
  System.init();
  for(var i=0;i<3;++i){
    System.addBody((new Planet(Math.random()*3)));
  }
});
