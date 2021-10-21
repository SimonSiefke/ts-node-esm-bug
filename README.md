# ts-node esm bug

Use Node Version 16.12.0 or 17.x

```sh
git clone git@github.com:SimonSiefke/ts-node-esm-bug.git &&
cd ts-node-esm-bug &&
npm ci &&
node --loader ts-node/esm src/index.ts
```

It outputs

```
simon tsnode-bug $ node --loader ts-node/esm src/index.ts
(node:8773) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
TypeError: RegExpPrototypeExec is not a function
    at defaultGetFormat (/tmp/tsnode-bug/node_modules/ts-node/dist-raw/node-esm-default-get-format.js:50:24)
    at defer (/tmp/tsnode-bug/node_modules/ts-node/src/esm.ts:170:7)
    at /tmp/tsnode-bug/node_modules/ts-node/src/esm.ts:175:14
    at Generator.next (<anonymous>)
    at /tmp/tsnode-bug/node_modules/ts-node/dist/esm.js:8:71
    at new Promise (<anonymous>)
    at __awaiter (/tmp/tsnode-bug/node_modules/ts-node/dist/esm.js:4:12)
    at getFormat (/tmp/tsnode-bug/node_modules/ts-node/dist/esm.js:108:16)
    at /tmp/tsnode-bug/node_modules/ts-node/src/esm.ts:127:14
    at Generator.next (<anonymous>)
```
