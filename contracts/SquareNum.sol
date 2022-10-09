// I'm a comment!
// SPDX-License-Identifier: MIT

pragma solidity 0.8.8;

// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SquareNum {
  uint256 Number;

  function store(uint256 _Number) public {
    Number = _Number;
  }

  function retrieve() public view returns (uint256) {
    return Number;
  }
  
  function square_num(uint256 _Number) public pure returns (uint256) {
    return _Number**2;
  }
}
