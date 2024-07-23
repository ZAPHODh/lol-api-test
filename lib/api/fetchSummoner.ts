export const fetchSummoner = async (
    puuid: string,
    countryCode: countryCode
) => {
    const response = await fetch(
        `https://${countryCode}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
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
    const summonerDTO: SummonerDTO = await response.json()
    return summonerDTO
}
