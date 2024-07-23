import { Request, Response, NextFunction } from 'express'

export const validateHeaders = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const name = req.headers['name'] as string
    const tag = req.headers['tag'] as string
    const country = req.headers['country'] as string
    if (!name || !tag || !country) {
        const error: StatusError = {
            status_code: 400,
            message: 'missing params',
        }
        return res.status(400).json(error)
    }
    next()
}
