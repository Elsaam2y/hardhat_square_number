# Hardhat Square Number

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Nodejs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install) 

## Quickstart

```
git clone https://github.com/Elsaam2y/hardhat_square_number.git
cd hardhat_square_number
yarn
yarn hardhat
```

# Usage

Deploy:

```
yarn hardhat run scripts/deploy.js
```

## Testing

```
yarn hardhat test
```

### Test Coverage

```
yarn hardhat coverage
```

## Estimate gas

You can estimate how much gas things cost by running:

```
yarn hardhat test
```

And you'll see and output file called `gas-report.txt`

## Local Deployment 

If you'd like to run your own local hardhat network, you can run:

```
yarn hardhat node
```

And then **in a different terminal**

```
yarn hardhat run scripts/deploy.js --network localhost
```

And you should see transactions happen in your terminal that is running `yarn hardhat node`