import Express from 'express'
import cors from 'cors'
import { router } from './routes'

class App {
    private _application: any

    constructor() {
        this._application = Express()
        this._application.use(Express.json())
        this._application.use(cors())
        this._application.use('/', router)
    }

    get application() {
        return this._application
    }
}

export const app = new App()