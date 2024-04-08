const client = require("./client")

async function initRedis () {
    await client.set("msg:7","Hello world from node and redis");
    await client.expire("msg:7",10);
    const result = await client.get("msg:7")
     console.log("Result ->",result);
};

initRedis();