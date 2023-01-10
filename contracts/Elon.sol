// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Elon is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("ElonMusk","ELON"){}

    function mintNFT() public returns(uint256){
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, "https://jsonkeeper.com/b/YYLA");

        console.log(
            "The nft id %s has been minted to %s",
            newItemId,
            msg.sender
        );
        return newItemId;
    }
}