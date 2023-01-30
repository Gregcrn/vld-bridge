require("dotenv").config();

module.exports = {
    parent: {
        rpc: process.env.ROOT_RPC,
        erc20_token: '0xf28eabe8f7dc81ac2716084206ae4c8c85d05b83' // Valid Token on Root Chain (Goerli) or Ethereum Mainnet
    },
    child: {
        rpc: process.env.MATIC_RPC || 'https://rpc-mumbai.matic.today',
        erc20_token: '0x435576645b9b829bc47a9d701938e2b6aae86189' // Valid Token on Child Chain (Mumbai) or Polygon Mainnet
    },
    user1: { // User 1 on Root Chain : Goerli Testnet or Ethereum Mainnet
        privateKey: process.env.USER1_PRIVATE_KEY,
        address: process.env.USER1_ADDRESS
    },
    user2: { // User 2 on Child Chain : Mumbai Testnet or Polygon Mainnet
        privateKey: process.env.USER2_PRIVATE_KEY,
        address: process.env.USER2_ADDRESS
    }
}
