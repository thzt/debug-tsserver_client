## debug-tsserver-client

VSCode 用于调试 tsserver 的客户端配置。

## 前置条件

### 1. TypeScript 源码仓库
`{TypeScript_Root}` 为本地 TypeScript 源码目录

#### （1）克隆
```
$ git clone https://github.com/microsoft/TypeScript.git {TypeScript_Root}
$ cd {TypeScript_Root}
$ git checkout v3.7.3
```

#### （2）构建
```
$ npm i
$ node node_modules/.bin/gulp LKG
```

#### （3）修改 {TypeScript_Root}/bin/tsserver
```
#!/usr/bin/env node
require('../built/local/tsserver.js');
```

#### （4）新建 {TypeScript_Root}/debug/index.ts
```
const i: number = 1;
```

### 2. 本仓库代码调整

#### 修改本仓库 index.js 中的 `root` 变量
```
// 改为 本地 TypeScript 源码目录绝对地址
const root = {TypeScript_Root};
```

## 使用方式

用VSCode 打开本仓库，按 `F5` 启动调试。

- - -

### 参考

[淡如止水 TypeScript（八）: 3. 调试 tsserver](https://www.yuque.com/thzt/typescript/suz2wo#d1ba7040)
