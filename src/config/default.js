require('dotenv').config()
const env = process.env.NODE_ENV // 'dev' or 'test'

const development = {
  app: {
    db: {
      host: process.env.APP_DEV_DB_HOST
    },
    port: process.env.APP_PORT
  }
}
const production = {
  app: {
    db: {
      host: process.env.APP_PROD_DB_HOST
    },
    port: process.env.APP_PORT
  }
}

const config = {
  development,
  production
}

module.exports = config[env]
