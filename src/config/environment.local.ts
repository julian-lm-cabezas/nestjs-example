module.exports.getEnv = () => {
    return {
        port: 3000,
        mongo_url: 'mongodb://eduardo:eduardo@aeslmnomona01:27017,aeslmnomona02:27017,aeslmnomona03:27017/greentree?replicaSet=aeslmnomon&readPreference=primaryPreferred',
        logLevel: 'debug'

    }
}

