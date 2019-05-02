const { RipGrep } = require('../dist/index');
let rg = new RipGrep('lol', '.').json().run();

console.log(rg.asString());
console.log(rg.asObject());
