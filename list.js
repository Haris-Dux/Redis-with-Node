const client = require("./client")

async function initRedis () {
    await client.lpush("message",1)
    await client.lpush("message",2)
    await client.lpush("message",3)
    await client.lpush("message",4)
    const result = await client.blpop("message",10)
     console.log("Result ->",result);
};

initRedis();