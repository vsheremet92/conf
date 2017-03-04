import config from "./config"

config.printHelp();


console.log(`Server started at port ${ config.port.val() }, db connection '${ config.db.val() }'`)
