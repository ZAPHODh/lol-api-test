import { Request, Response } from 'express'
import { fetchMatchesInfo } from '../lib/api/fetchMatchesInfos'

export const getMatch = async (req: Request, res: Response) => {
    const matchesID: string[] = JSON.parse(req.headers.matchesID as string)
    const region = req.headers.region as Region
    try {
        const matchesInfo = await fetchMatchesInfo(matchesID, region)
        return res.status(200).json(matchesInfo)
    } catch (error) {
        return res.status(400).json(error)
    }
}
