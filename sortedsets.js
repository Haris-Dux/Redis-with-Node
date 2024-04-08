const client = require("./client");


async function init () {
     await client.zadd("socres", 10, "john", 8, "jane", 3, "alex")
    const result = await client.zrange("socres",0,-1,"WITHSCORES")
    console.log(result);
};

init();