const { resolve } = require('path');
const { webpack } = require('webpack');
const config = require('./webpack.config.js');  



let fs = require('fs');
let path = require('path');
let args = process.argv;
let extName = 'example';
let projectPath = resolve("./")
let extPublicPath = path.join(projectPath, 'ext_public')
let extPublicManifestPath = path.join(extPublicPath, 'manifest.json')


if (args.length >= 3) {
    extName = args[2];
    console.log(`set extension name to '${extName}'`)
}

let manifest = {
    "manifest_version": 3,
    "name": extName,
    "description": "Base Level Extension",
    "version": "1.0",
    "action": {
      "default_popup": "index.html",
      "default_icon": "image.png"
    }
}

config.output.path = extPublicPath;
config.devtool = false;

webpack(config,(err, stats) => {  
    if (err) {  
        console.error(err);  
        return;  
    }  
    console.log(stats.toString({  
        colors: true,  
        modules: false,  
        children: false,  
        chunks: false,  
        chunkModules: false  
    }));  
});


let manifestJsonObj = JSON.stringify(manifest);
fs.writeFile(extPublicManifestPath, manifestJsonObj, 'utf-8', (err) => {console.log(err)})
console.log(`look ext_public manifest.json`)
