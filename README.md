# Currency



A Code run to demonstrate the power of OOP, SOLID and other monsters while studying currency representation problems in software development.


## How To

### 1 Clone the repo

```bash
git clone https://github.com/profe-ajedrez/currency.git
```

### 2 Enter to the project folder and install dependencies

```bash
npm i @babel/cli @babel/core @babel/node @babel/preset-env jest nodemon  --save-dev
npm i big.js
```

### 3 Add commands to package.json

```bash
"devDependencies": {
    "@babel/cli": "^7.15.4",
    "@babel/core": "^7.15.5",
    "@babel/node": "^7.15.4",
    "@babel/preset-env": "^7.15.4",
    "jest": "^27.1.0",
    "nodemon": "^2.0.12"
  },
  "dependencies": {
    "big.js": "^6.1.1"
}
```


El archivo `package.json` Debería quedar mas o menos así:

```bash
{
  "name": "currency",
  "version": "1.0.0",
  "description": "wrapper to manage currencies",
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node index.js",
    "test": "clear && npm run build && jest",
    "build": "babel index.js -d dist --source-maps"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@babel/cli": "^7.15.4",
    "@babel/core": "^7.15.5",
    "@babel/node": "^7.15.4",
    "@babel/preset-env": "^7.15.4",
    "jest": "^27.1.0",
    "nodemon": "^2.0.12"
  },
  "dependencies": {
    "big.js": "^6.1.1"
  }
}
```



### 4 Run tests 

```bash
npm test
```

### 5 Enjoy!


## What will we do

Something in the line of:

![currency_coderun](https://user-images.githubusercontent.com/20423399/132140450-80def4be-dedd-4e42-b39d-f7ed6ce15a88.png)


