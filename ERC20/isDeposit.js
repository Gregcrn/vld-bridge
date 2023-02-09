const { getFxPortalClient } = require('../utils')
const config = require('../config')


async function execute() {
    // initiate fxClient
    const fxClient = await getFxPortalClient()
    const erc20Token = fxClient.erc20(config.parent.erc20_token, true)

    // get current allowance
    const allowance = await erc20Token.getAllowance(config.user1.address)


    console.log(`Allowance is ${allowance}`)
}

execute().then(() => {
}
).catch(err => {
    console.log('err', err)
}
).finally(_ => {
    process.exit(0)
}
)