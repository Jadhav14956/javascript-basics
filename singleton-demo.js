// used when ever you know only single object os to be created.

function Hero(name){
    if(typeof Hero.instance === 'Object'){
        return Hero.instance;
    }
    this.name = name;
    Hero.instance = this;
}