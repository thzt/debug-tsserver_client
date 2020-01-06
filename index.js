const path = require('path');
const { spawn } = require('child_process');

const root = '/Users/.../TypeScript';  // 本地 TypeScript 源码目录  

const child = spawn('node', [
  '--inspect-brk=9002',  // tsserver 调试端口号
  path.join(root, 'bin/tsserver'),
]);

child.stdout.on('data', data => {
  console.log(data.toString());
});

child.on('close', code => {
  console.log(code);
});

const filePath = path.join(root, 'debug/index.ts');

const openFile = {
  seq: 0,
  type: 'request',
  command: 'open',
  arguments: {
    file: filePath,
  }
};
const getQuickInfo = {
  seq: 1,
  type: 'request',
  command: 'quickinfo',
  arguments: {
    file: filePath,
    line: 1,
    offset: 7
  }
};

child.stdin.write(`${JSON.stringify(openFile)}\n`);
child.stdin.write(`${JSON.stringify(getQuickInfo)}\n`);
