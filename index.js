/**
 * Author :- Dheeraj Kumar Rao
 * Website :- rao123dk.github.io
 */


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


Array.prototype.sample = function(){

}