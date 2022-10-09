// imports
const { ethers, run, network } = require("hardhat")

// async main
async function main() {
  const SquareNumFactory = await ethers.getContractFactory("SquareNum")
  console.log("Deploying contract...")
  const SquareNum = await SquareNumFactory.deploy()
  await SquareNum.deployed()
  console.log(`Deployed contract to: ${SquareNum.address}`)
  // what happens when we deploy to our hardhat network?
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await SquareNum.deployTransaction.wait(6)
    await verify(SquareNum.address, [])
  }

  const currentValue = await SquareNum.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  // Update the current value
  const updatedValue = await SquareNum.square_num(4)
  console.log(`Updated Value is: ${updatedValue}`)
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
