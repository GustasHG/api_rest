import express from 'express'
import homeRouter from './src/routes/home-routes'

class App{
    constructor() {
        this.app = express()
        this.routes()
        this.middlewares()
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true}))
        this.app.use(express.json())
    }

    routes() {
        this.app.use("/", homeRouter)
    }
}
export default new App().app;