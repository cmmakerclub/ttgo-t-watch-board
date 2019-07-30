const fs = require("fs");
const path = require("path");
const engine = Vue.prototype.$engine;
const G = Vue.prototype.$global;
const mkdirp = engine.util.requireFunc("mkdirp");

//---- setup dir and config ----//
let config = require("./config");
let boardDirectory = `${engine.util.boardDir}/${config.name}`;
let platformDirectory = `${engine.util.platformDir}/${config.platform}`;
let boardIncludeDir = `${boardDirectory}/include`;
let platformIncludeDir = `${platformDirectory}/include`;
let context = JSON.parse(fs.readFileSync(boardDirectory + "/context.json", "utf8"));
let platformCompiler = engine.util.requireFunc(`${platformDirectory}/compiler`);

function compile(rawCode, boardName, config, cb) {
  console.log(`[kbpro] compiler.compile platformDir = ${platformDirectory}`);
  return new Promise((resolve, reject) => {
    //--- init ---//
    let codegen = null;
    if (fs.existsSync(`${boardDirectory}/codegen.js`)) {
      codegen = require("./codegen");
    } else {
      codegen = engine.util.requireFunc(`${platformDirectory}/codegen`);
    }
    //---- inc folder ----//
    let app_dir = `${boardDirectory}/build/${boardName}`;
    let inc_src = engine.util.walk(boardIncludeDir)
                             .filter(file => path.extname(file) === ".cpp" || path.extname(file) === ".c");
    inc_src = inc_src.concat(engine.util.walk(platformIncludeDir)
                             .filter(file => path.extname(file) === ".cpp" || path.extname(file) === ".c"));
    let inc_switch = [];
    //--- step 1 load template and create full code ---//
    let sourceCode = null
    let codeContext = null;
    if (config.isSourceCode) {
      sourceCode = rawCode;
      //searching all include to find matched used plugin file
      codeContext = {
        plugins_sources: [],
        plugins_includes_switch: [],
      };
      let pluginInfo = G.plugin.pluginInfo;
      let incsRex = /#include\s*(?:\<|\")(.*?\.h)(?:\>|\")/gm;
      let m;
      while (m = incsRex.exec(sourceCode)) {
        let incFile = m[1].trim();
        //lookup plugin
        let includedPlugin = pluginInfo.categories.filter(
            obj => obj.sourceFile.includes(incFile));
        if (includedPlugin.length > 0) {
          codeContext.plugins_includes_switch.push(
              includedPlugin[0].directory + "/src");
          let targetCppFile = includedPlugin[0].directory + "/src/" +
              incFile.replace(".h", ".cpp");
          codeContext.plugins_sources.push(targetCppFile);
        }
      }
    } else {
      let res = codegen.generate(rawCode);
      sourceCode = res.sourceCode;
      codeContext = res.codeContext;
    }
    //----- plugin file src ----//
    inc_src = inc_src.concat(codeContext.plugins_sources);
    inc_switch = inc_switch.concat(codeContext.plugins_includes_switch);
    //------ clear build folder and create new one --------//
    if (fs.existsSync(app_dir)) {
      engine.util.rmdirf(app_dir);
    }
    mkdirp.sync(app_dir);
    //-----------------------------------------------------//
    fs.writeFileSync(`${app_dir}/user_app.cpp`, sourceCode, "utf8");
    //--- step 3 load variable and flags ---//
    let cflags = [];
    let ldflags = [];
    let libflags = [];
    if (context.cflags) {
      cflags = context.cflags.map(f => f.replace(/\{board\}/g, boardDirectory));
    }
    if (context.ldflags) {
      ldflags = context.ldflags.map(
          f => f.replace(/\{board\}/g, boardDirectory));
    }
    if (context.libflags) {
      libflags = context.libflags.map(
          f => f.replace(/\{board\}/g, boardDirectory));
    }
    //--- step 4 compile
    let contextBoard = {
      board_name: boardName,
      app_dir: app_dir,
      process_dir: boardDirectory,
      cb,
    };

    inc_src.push(`${app_dir}/user_app.cpp`);
    platformCompiler.setConfig(contextBoard);

    engine.util.promiseTimeout(1000).then(() => {
      return platformCompiler.compileFiles(inc_src, [], cflags, inc_switch);
    }).then(() => {
      return platformCompiler.archiveProgram(inc_src);
    }).then(() => {
      return platformCompiler.linkObject(ldflags, libflags);
    }).then(() => {
      return platformCompiler.createBin();
    }).then(() => {
      resolve();
    }).catch(msg => {
      console.log("error msg : " + msg);
      reject(msg);
    });
  });
}

let exp = {};
Object.assign(exp, platformCompiler);
Object.assign(exp, {
  compile,
});
//console.log(exp);
module.exports = exp;
