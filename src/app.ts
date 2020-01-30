import server from './server'
import * as config from './config/env_test'

server.listen(config.port, () => console.log(`Listen on ${config.port}`))
