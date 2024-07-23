import { NextFunction, Request, Response } from 'express'

import { fetchMatchID } from '../lib/api/fetchMatchID'
import { getParams } from '../lib/utils/getParams'

export const getMatchID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const puuid = req.headers.puuid as string
    const region = req.headers.region as Region
    const params = getParams(req)
    try {
        const matches = await fetchMatchID(region, puuid, params)
        req.headers.matchesID = JSON.stringify(matches)
        next()
    } catch (error) {
        return res.status(400).json(error)
    }
}
