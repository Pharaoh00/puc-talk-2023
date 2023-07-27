const prismaClient = require("@prisma/client");
const prisma = new prismaClient.PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "stdout",
            level: "error",
        },
    ],
});

prisma.$use(async (params, next) => {
    const before = Date.now();
    const result = await next(params);
    const after = Date.now();

    console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
    return result;
});

prisma.$on("query", (e) => {
    console.log("\n\n\nQuery: " + e.query);
    console.log("Params: " + e.params);
});

module.exports = prisma;