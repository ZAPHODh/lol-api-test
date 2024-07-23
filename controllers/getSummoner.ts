import { Request, Response } from 'express'
import { fetchSummonerRank } from '../lib/api/fetchSummonerRank'

export const getSummoner = async (req: Request, res: Response) => {
    const summonerDTO: SummonerDTO = JSON.parse(req.headers.summoner as string)

    const countryCode = req.headers.country as countryCode
    try {
        const summonerRank = await fetchSummonerRank(
            summonerDTO.id,
            countryCode
        )
        const summoner: Summoner = { summonerDTO, summonerRank }
        res.status(200).json(summoner)
    } catch (error) {
        return res.status(400).json(error)
    }
}
