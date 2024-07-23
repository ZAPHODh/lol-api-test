import { Request } from 'express'
export const getParams = (req: Request) => {
    const params: matchParams = {
        count: req.headers.count as string,
        queue: req.headers.queue as string,
        type: req.headers.type as
            | 'ranked'
            | 'normal'
            | 'tourney'
            | 'tutorial'
            | undefined,
    }
    return params
}
