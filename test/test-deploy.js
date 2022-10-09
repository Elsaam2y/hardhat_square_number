const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SquareNum", () => {})
describe("SquareNum", function () {
  // let SquareNumFactory
  // let SquareNum
  let SquareNumFactory, SquareNum
  beforeEach(async function () {
    SquareNumFactory = await ethers.getContractFactory("SquareNum")
    SquareNum = await SquareNumFactory.deploy()
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await SquareNum.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })
  it("Should update when we call store", async function () {
    const expectedValue = "25"
    const transactionResponse = await SquareNum.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await SquareNum.square_num(5)
    assert.equal(currentValue.toString(), expectedValue)
  })
})
