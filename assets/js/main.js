requirejs.config({
    paths: {
        external: './external',
        models: './models',
        engine: './engine'
    }
});

requirejs(['external/jquery.min','engine/master'], function(){
});
