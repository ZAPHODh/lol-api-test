import { NextFunction, Request, Response } from 'express'
import { getUUID } from '../lib/api/getUUID'

export const addPuuid = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const name = req.headers.name as string
    const tag = req.headers.tag as string
    const region = req.headers.region as Region

    const params: GetUUId = {
        name: name.replace(/ /g, '%20'),
        tag,
        region,
    }
    try {
        const { puuid } = await getUUID(params)
        req.headers.puuid = puuid
        next()
    } catch (error) {
        return res.status(400).json(error)
    }
}
