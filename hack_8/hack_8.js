/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result.push(arr[1], arr[2], arr[3]);

for (let i = 0; i < 2; i++){
    result[i] = result[i].replace("a", "@");
}

result[2] = result[2].toUpperCase();

console.log(result);
//export result
module.exports = result;