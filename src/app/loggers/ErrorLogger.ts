import  { createLogger, transports, format } from "winston"


const ErrorLogger = createLogger({
    transports: [
        new transports.File({
            filename: 'error.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json(), format.prettyPrint())
        })
    ]
})

export default ErrorLogger