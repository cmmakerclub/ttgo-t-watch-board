const engine = Vue.prototype.$engine;
let config = require("./config");
let platformCompiler = engine.util.requireFunc(`${engine.util.platformDir}/${config.platform}/compiler`);
module.exports = platformCompiler;