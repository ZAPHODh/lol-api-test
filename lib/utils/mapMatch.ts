export const mapMatch = (completeMatch: any) => {
    console.log(completeMatch)
    const mappedData: MatchData = {
        metadata: {
            dataVersion: completeMatch.metadata.dataVersion,
            matchId: completeMatch.metadata.matchId,
            participants: completeMatch.metadata.participants,
        },
        info: {
            participants: completeMatch.info.participants.map(
                (participant: any) => ({
                    championId: participant.championId,
                    championName: participant.championName,
                    items: participant.items,
                    kills: participant.kills,
                    deaths: participant.deaths,
                    assists: participant.assists,
                    puuid: participant.puuid,
                })
            ),
        },
    }

    return mappedData
}
