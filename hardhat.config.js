require("@nomiclabs/hardhat-waffle")
require("dotenv/config");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
     mumbai: {
       url: "https://rpc-mumbai.maticvigil.com",
       accounts: [process.env.PRIVATE_KEY]
     }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
