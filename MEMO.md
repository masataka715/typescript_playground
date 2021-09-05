```bash
sudo npm install -g typescript
tsc -v

tsc hello.ts
node hello.js

tsc --init
```

ローカルサーバー
https://www.npmjs.com/package/serve
```bash
sudo npm install -g serve
```

```bash
// package.jsonをデフォルトの内容で
npm init -y

// webpack
npm install webpack webpack-cli --save-dev
npx webpack

alias webpack="./node_modules/.bin/webpack"
webpack --watch

npm run build

// webpackでtypescriptを直接扱う（typescriptはローカルに必要）
npm install ts-loader typescript --save-dev

npm install webpack-dev-server --save-dev

// react
npm install react react-dom @types/react @types/react-dom --save-dev

// create-react-appで
npx create-react-app create-react-app --template typescript
```


```bash
// babel
npm install @babel/core @babel/cli @babel/preset-env --save-dev
npx babel before.js --out-file after.js

npm install babel-loader --save-dev

npm install react react-dom @babel/preset-react --save-dev
```