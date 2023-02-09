require("dotenv").config();

module.exports = {
    parent: {
        rpc: process.env.ROOT_RPC,
        erc20_token: '0x246e828937f20c463ecca95498cb1afe8347a6fe' // Valid Token on Root Chain (Goerli) or Ethereum Mainnet
    },
    child: {
        rpc: process.env.MATIC_RPC || 'https://rpc-mumbai.matic.today',
        erc20_token: '0x0b158ad0187feeb1bf6966dc3a669c894a23e9aa' // Valid Token on Child Chain (Mumbai) or Polygon Mainnet
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
