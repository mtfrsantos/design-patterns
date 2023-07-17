# New TypeScript Project Steps

## Check node version

```bash
node --version
```

## Install latest node version

```bash
nvm install node
```

## Generate package.json

```bash
npm init -y
```

## Install yarn

```bash
npm install -g yarn
```

## Install TypeScript and Jest

```bash
yarn add typescript jest @types/jest ts-node ts-jest
```

## Initialize TypeScript

```bash
npx tsc --init
```

## Change `tsconfig.json` content to this

```json
{
    "compilerOptions": {
        "incremental": true,
        "target": "es2016",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": [
        "src",
        "test"
    ]
}
```

## Create src e test directories

```bash
mkdir src test
```

## Initialize jest config

```bash
npx ts-jest config:init
```

## Add in scripts in `package.json`

```json
"scripts": {
    "main": "tsc && node ./dist/main",
    "test": "tsc && jest ./dist/test"
  },
```

## Run without ts-node

```bash
npm run main
```

## Run with ts-node

```bash
npx ts-node src/main.ts
```

## Run test without ts-jest

```bash
npm run test
```

## Run test with ts-jest

```bash
npx jest
```
