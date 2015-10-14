// var uuid = require('uuid'); //only need name of package instead of path since from npm

var ActorModule = {
    arr: [],
};

function Actor(img, name, movie){
//  this.id = uuid.v4();
  this.img = img;
  this.name = name;
  this.movie = movie;
}

var will = new Actor('http://cdn.celebritycarsblog.com/wp-content/uploads/Will-Smith.jpg','Will Smith','Men in Black');
var jackie = new Actor('http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2NDE4MzExNjkx.jpg', 'Jackie Chan','Rush Hour');
var bruce = new Actor('http://ia.media-imdb.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg','Bruce Willis', 'Fifth Element');

ActorModule.arr.push(will,jackie,bruce);
module.exports = ActorModule;
