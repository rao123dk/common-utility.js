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



Array.prototype.sample = function(){

}
