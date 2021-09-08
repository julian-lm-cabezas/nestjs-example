exports.getEnv = (): any => {
    return {
        port: 3000,
        mongo_url: process.env.MONGODB_URI

    }
}