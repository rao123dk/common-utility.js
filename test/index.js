require('../index');

var names = ["dk", "rao","dk","jsk"];
//console.log(names.unique());

var names = [8];
//console.log(names.isEmpty());

var names = [8, null, undefined,0];
//console.log(names.clean());
//console.log(names.clean('undefined'));


var names = [8, null, undefined,0];
//console.log(names.copyArray());


//console.log([...3]);
//console.log(...10);

let obj = { a:22, b:4}

//console.log(obj.has('a'))
//console.log(obj.has('c'))



var test = {
	a:"rr",
    b:"dd",
    result : {
    	status : { aa :44, bll:33},
        message:"ok"
    }
}
console.log(test.find('result.status.aa'))

console.log(String().randomString(6))
