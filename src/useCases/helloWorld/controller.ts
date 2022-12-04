import { Request, Response } from "express"
import { HelloWorldService } from "./service"

export class HelloWorldController {
    constructor (private _service:HelloWorldService) {}

    async handle (req:Request, res: Response) {
        try {
            const result = await this._service.execute(req.body.msg)
            return res.status(result.status).json(result)
        } catch (err:any) {
            return res.status(500).json({
                error: 'Erro no servidor',
                message: err.message
            })
        }
    } 
}