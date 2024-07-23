export const getUUID = async ({ region, name, tag }: GetUUId) => {
    const response = await fetch(
        `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`,
        {
            headers: {
                'X-Riot-Token': process.env.API_KEY,
            },
        }
    )

    if (!response.ok) {
        const error: StatusError = {
            status_code: response.status,
            message: response.statusText,
        }
        throw error
    }

    const accountDTO: AccountDTO = await response.json()
    return accountDTO
}
