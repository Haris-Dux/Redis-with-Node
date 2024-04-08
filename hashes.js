const client = require("./client");


async function init () {
    await client.hset("bike:2",{
        model:'BMW',
        price:10000,
        model:2024,
        transmission:'mannual'
    });
    await client.hincrby('bike:1','rides',1)
    const result = await client.hgetall("bike:1");
    console.log(result);
};

init();
