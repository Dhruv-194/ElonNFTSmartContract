const hre = require("hardhat");

async function main() {
    const Elon = await hre.ethers.getContractFactory("Elon");
    const elon = await Elon.deploy();

    await elon.deployed();

    console.log("Elon contract deployed to", elon.address);

    let txcn = await elon.mintNFT();
    await txcn.wait();
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });