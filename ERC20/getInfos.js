const { getFxPortalClient } = require('../utils');
const config = require('../config')

// ERC20Token address on root chain
const token = config.parent.erc20_token

// async function to get ballance of user1 & name of token & symbol of token & decimals of token

async function getInfos() {
    // interact with ERC20
    const fxCLient = await getFxPortalClient();
    const erc20 = fxCLient.erc20(token, true);
    const balance = await erc20.getBalance(config.user1.address);
    console.log('balance', balance);
    const name = await erc20.getName();
    console.log('name', name);
    const symbol = await erc20.getSymbol();
    console.log('symbol', symbol);
    const decimals = await erc20.getDecimals();
    console.log('decimals', decimals);
}

getInfos()
    .then(() => { })
    .catch((err) => {
        console.log('err', err);
    })
    .finally((_) => {
        process.exit(0);
    });
