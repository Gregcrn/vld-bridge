const { getFxPortalClient } = require('../utils')
const config = require('../config')

const token = config.parent.erc20_token
// amount to deposit in wei (500 ERC20)
const amountToDeposit = '500000000000000000000'

async function execute() {
    // initiate fxClient
    const fxClient = await getFxPortalClient()
    const erc20Token = fxClient.erc20(token, true)

    // get current allowance
    const allowance = await erc20Token.getAllowance(config.user1.address)

    if (parseInt(allowance) < parseInt(amountToDeposit)) {
        console.log(`Allowance ${allowance} is less than amount to deposit of ${amountToDeposit}.`)
    } else {
        //execute transaction
        console.log('Execute transaction...')
        const txResult = await erc20Token.deposit(amountToDeposit, config.user2.address)
        const txHash = await txResult.getTransactionHash()
        console.log('Transaction Hash:', txHash)
    }
}

execute().then(() => {
}).catch(err => {
    console.log('err', err)
}).finally(_ => {
    process.exit(0)
})