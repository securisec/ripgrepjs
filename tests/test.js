const { RipGrep } = require('ripgrepjs');
let rg = RipGrep('lol', '.').json().run();

console.log(rg.asString());
console.log(rg.asObject());
