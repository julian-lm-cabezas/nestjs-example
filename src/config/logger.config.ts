import {transports, LoggerOptions} from 'winston'
import {LoggingWinston} from '@google-cloud/logging-winston'
const { getEnv }  = require('./environment')

export class LoggerConfig {

    private options: LoggerOptions;
    constructor(){
        this.options = {
            level: getEnv().logLevel.toLowerCase(),
            transports:[ ]
        }
        this.options.transports = process.env.NODE_ENV? 
            [new transports.Console(), new LoggingWinston()] :
            [new transports.Console()]
    }

    public loadOptions = (): object => this.options
}