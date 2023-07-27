const redis = require("redis");

let redis_client;
module.exports.initialize = async () => {
    redis_client = redis.createClient(process.env.REDIS_IP, process.env.REDIS_PORT);
    redis_client.on("Redis Client error", (error) => console.log(`Error: $(error)`));
    await redis_client.connect().then(() => {
        console.log("Redis client connected");
    })
}

module.exports.write_data = (key, value) => {
    return redis_client.set(key, value);
}

module.exports.get_data = (key) => {
    return redis_client.get(key);
}

module.exports.delete_data = (key) => {
    return redis_client.del(key);
}