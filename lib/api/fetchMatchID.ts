import { generateMatchParams } from '../utils/generateMatchParams'

export const fetchMatchID = async (
    region: Region,
    puuid: string,
    params?: matchParams
) => {
    let stringfiedParams = ''
    if (params) {
        stringfiedParams = generateMatchParams(params)
    }
    const response = await fetch(
        `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids${stringfiedParams}`,
        {
            headers: {
                'X-Riot-Token': process.env.API_KEY,
            },
        }
    )
    if (!response.ok) {
        const error: StatusError = {
            message: response.statusText,
            status_code: response.status,
        }
        throw error
    }
    const matches: matchList = await response.json()
    return matches
}
