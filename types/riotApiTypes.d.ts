type AccountDTO = {
    puuid: string
    gameName: string
    tagLine: string
}

type SummonerDTO = {
    accountId: string
    profileIconId: number
    revisionDate: number
    id: string
    puuid: string
    summonerLevel: number
}

type GetUUId = {
    region: 'americas' | 'asia' | 'europe' | 'esports'
    name: string
    tag: string
}

type StatusError = {
    status_code: number
    message: string
}

type Region = 'americas' | 'asia' | 'europe'

type countryCode =
    | 'BR1'
    | 'EUN1'
    | 'EUW1'
    | 'LA1'
    | 'LA2'
    | 'NA1'
    | 'OC1'
    | 'RU1'
    | 'TR1'
    | 'ME1'
    | 'JP1'
    | 'KR'
    | 'TW2'

type matchParams = {
    queue?: string
    type?: 'ranked' | 'normal' | 'tourney' | 'tutorial'
    count?: string
}

type matchList = string[]

type matchInfo = {
    participants: championData[]
}

type championData = {
    championId: number
    championName: string
    items: number[]
    kills: number
    deaths: number
    assistis: number
    puuid: string
}

type MatchData = {
    metadata: matchMetadata
    info: matchInfo
}

type matchMetadata = {
    dataVersion: string
    matchId: string
    participants: string[]
}
type SummonerRank = {
    leagueId: string
    queueType: string
    tier: string
    rank: string
    summonerId: string
    leaguePoints: number
    wins: number
    losses: number
    veteran: boolean
    inactive: boolean
    freshBlood: boolan
    hotStreak: boolean
}

type Summoner = {
    summonerDTO: SummonerDTO
    summonerRank: SummonerRank[]
}
