import { Request, Response, Router } from "express";

export const router = Router()

router.use('/hello-world', (request: Request, response: Response) => {
    return response.status(200).json({
        message: 'all ok',
        body: request.body
    })
})