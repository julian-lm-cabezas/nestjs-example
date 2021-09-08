exports.getEnv = (): any =>{
    if(process.env.NODE_ENV && process.env.NODE_ENV!='test' ){
        return {
            port: process.env.NODE_ENV,
            mongo_url: process.env.MONGODB_URI
        }
    }else require('./environment.local.js').getEnv()
}