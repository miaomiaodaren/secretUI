const readlineSync = require('readline-sync');
const fs = require('fs');
const fsextra = require('fs-extra');
const path = require('path');

const componentName = readlineSync.question('plase enter component name: ');
const className = componentName.replace(/\B([A-Z])/g, '-$1').toLowerCase();
const upperName = componentName.substring(0, 1).toUpperCase() + componentName.substring(1);
console.log(className, upperName, '###');

// process.cwd()返回当前工作目录。如：调用node命令执行脚本时的目录。
// __dirname返回源代码所在的目录。
const inputPath = `${__dirname}/template`;
const outputPath = `${process.cwd()}/src`;

function main() {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, {
      recursive: true,
    });
  }
  fs.mkdirSync(`${process.cwd()}/src/${upperName}`);
  fsextra.copy(`${__dirname}/template`, `${process.cwd()}/src/${upperName}`);
  replaceUpperName()
}

function replaceUpperName() {
  const taskList = [
    'index.md',
    'index.tsx',
    'style/index.less',
    'demo/basic.tsx'
  ];
  taskList.forEach(task => {
    const url = path.resolve(inputPath, task)
    let files = fs.readFileSync(url, 'utf-8')
    let result = files.replace(/{{upperName}}/g, upperName);
    fs.writeFileSync(url, result, 'utf8')
  })
}

main();
