import express from 'express'
import homeRouter from './src/routes/home-routes'
import dotenv from 'dotenv';
dotenv.config();

class App{
    constructor() {
        this.app = express()
        this.routes()
        this.middlewares()
    }

    dataBase() {
        const dbURI = process.env.MONGODB_URI;
        mongoose
            .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Conectado ao MongoDB'))
            .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
}

    middlewares() {
        this.app.use(express.urlencoded({ extended: true}))
        this.app.use(express.json())
    }

    routes() {
        this.app.use("/", homeRouter)
        this.app.use("/test", homeRouter)
    }
}
export default new App().app;