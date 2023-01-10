require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); //all the key value pairs are being made available due to this lib


const {API_URL_KEY, PRIVATE_KEY} = process.env; //environment variables are being loaded here.
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
        url: API_URL_KEY,
        accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
