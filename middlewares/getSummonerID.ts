import { NextFunction, Request, Response } from 'express'
import { fetchSummoner } from '../lib/api/fetchSummoner'

export const getSummonerID = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const puuid = req.headers.puuid as string
    const countryCode = req.headers.country as countryCode
    try {
        const summoner = await fetchSummoner(puuid, countryCode)
        req.headers.summoner = JSON.stringify(summoner)
        next()
    } catch (error) {
        return res.status(400).json(error)
    }
}
