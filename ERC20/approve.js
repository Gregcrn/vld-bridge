const { getFxPortalClient } = require('../utils')
const config = require('../config')

// ERC20Token address on root chain
const token = config.parent.erc20_token
// approuve amount 1000 VLD in wei
const amount = '1000000000000000000000'


// excecute function
async function execute() {
    // initate fxCLient
    const fxClient = await getFxPortalClient();
    const erc20Token = fxClient.erc20(token, true)

    // execute transaction
    const txResult = await erc20Token.approve(amount)
    console.log('txResult', txResult)
    const txHash = await txResult.getTransactionHash()
    console.log('Transaction hash : ', txHash)
}

execute().then(() => {
}).catch(err => {
    console.log('err', err)
}).finally(_ => {
    process.exit(0)
})


