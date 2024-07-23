import { mapMatch } from '../utils/mapMatch'

export const fetchMatchesInfo = async (
    matchesID: string[],
    region: Region
): Promise<MatchData[]> => {
    const matchesPromises = matchesID.map(async (match) => {
        const response = await fetch(
            `https://${region}.api.riotgames.com/lol/match/v5/matches/${match}`,
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

        const completeMatch = await response.json()
        return mapMatch(completeMatch)
    })

    const matches = await Promise.all(matchesPromises)
    return matches
}
