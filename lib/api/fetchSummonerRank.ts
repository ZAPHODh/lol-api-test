export const fetchSummonerRank = async (
    summonerID: string,
    countryCode: countryCode
) => {
    const response = await fetch(
        `https://${countryCode}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerID}`,
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
    const summonerRank: SummonerRank[] = await response.json()
    return summonerRank
}
