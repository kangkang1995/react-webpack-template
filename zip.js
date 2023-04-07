let {name, version} = require("./package.json");
let fs = require("fs");
let archiver = require("archiver");
const moment = require("moment");

let args = process.argv.splice(2);
let time = moment().format("YYYY年MM月DD日HHmmss");

let args0 = args.length ? args[0] : undefined;
if (args0 === 'prod') {
    // 正式
    packageName = `/${name}-${version}-${time}.zip`
} else if (args0 === "beta") {
    // 测试
    packageName = `/${name}.zip`
} else {
    // 自定义包名
    packageName = `/${args0}.zip`
}

let output = fs.createWriteStream(__dirname + packageName);

let archive = archiver("zip", {
    zlib: { level: 9 },
});

output.on("close", () => {
    console.log("压缩完成");
});

output.on("end", () => {
    console.log("文件处理完成");
});

archive.on("warning", (err) => {
    if (err.code === "ENOENT") {
        console.log(err);
    } else {
        throw err;
    }
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);

archive.directory("dist/", false);

archive.finalize();
