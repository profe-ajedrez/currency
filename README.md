# Currency



A Code run to demonstrate the power of OOP, SOLID and other monsters while checking out currency representation problems in software development.

Pst, a hint, we are using babel, so if something is not working when you try this run, check out [babel](https://babeljs.io)

Pst, another hint, the dev branch is better documented, so try `git checkout dev` after cloning this repo

## How To

### 1 Clone the repo

```bash
git clone https://github.com/profe-ajedrez/currency.git
```

### 2 Enter to the project folder and install dependencies

```bash
npm i @babel/cli @babel/core @babel/node @babel/preset-env jest nodemon  --save-dev
npm i -g --save-dev ndb
npm i big.js
```

## Troubleshooting

When things breaks...

### 1 Double check package.json

`package.json` should look's like:

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

###  2 Re run npm

```bash
npm i @babel/cli @babel/core @babel/node @babel/preset-env jest nodemon  --save-dev
npm i big.js
```


### 4 Run tests 

```bash
npm test
```

### 5 Enjoy!


## What will we do

Something in the line of:

![currency_coderun](https://user-images.githubusercontent.com/20423399/132140450-80def4be-dedd-4e42-b39d-f7ed6ce15a88.png)


