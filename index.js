/**
 * Author :- Dheeraj Kumar Rao
 * Website :- rao123dk.github.io
 */

//Array
Array.prototype.unique = function(){
	return this.filter((value, index, self)=>(
	   self.indexOf(value) === index
  ));
};

Array.prototype.isEmpty = function(){
    return (Array.isArray(this) && this.length) ? false : true;
}

Array.prototype.clean = function(required){
    if(!required){
        return this.filter(Boolean)
    } else {
        return this.filter((data)=>{
            return data !== undefined;
    });
  }
}

Array.prototype.copyArray = function(){
    return this.slice(0);
}
//String
String.prototype.trim = function(){

}
String.prototype.randomString = function(strlen){
  var randomstring = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < strlen; i++){
      randomstring += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return randomstring;
}

String.prototype.last = function () {
  //return this.split('').pop();
  return this[this.length -1];
};




//Number
Number.prototype[Symbol.iterator] = function*(){
	for(let i = 0; i<= this; i++){
    	yield i;
    }
};

//Object

Object.prototype.has = function(data){
    return !!data && data in this;
}


Object.prototype.empty = function(){
    return !this && !Object.keys(this).length;
}

Object.prototype.copy = function(){
    return Object.assign({},this);
}


Object.prototype.find = function(data){
    let findChain = data && data.split('.');
    if(findChain.length === 1){
      return this[data]
    } else {
      var curr = this;
        for(let item=0; item < findChain.length; item++){
          curr = curr[findChain[item]];
          if(!curr){
            break;
          }
        }
        return curr;

    }
}

/**
 * Object.keys(new Date()).length === 0; so
 * (new Date()).constructor === Date And ({}).constructor === Object
 */
Object.prototype.isEmpty = function(){
  return (Object.keys(this).length === 0 && this.constructor === Object);
}



Array.prototype.sample = function(){

}

