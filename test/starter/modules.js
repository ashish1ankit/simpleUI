// console.log(arguments);
// console.log(require('module').wrapper);

const C=require("./first-module-1");
const calc= new C();

// console.log(calc.add(1,5));
// const c=require("./test-module-2");
const {add, divide}=require("./test-module-2");//nam e should be both same as of modfule
// const calc= new C();
// console.log(add(2,7));


require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();