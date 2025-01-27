# Riot API Test Project

This project is a test application that interacts with the Riot Games API, built using TypeScript.

## Installation

Clone the repository:

```bash
git clone https://github.com/ZAPHODh/lol-api-test.git
```

Navigate to the project directory:

```bash
cd lol-api-test
```

Install dependencies:

```bash
npm install
```

run the application

```bash
npm start
```

## Project Overview

The application provides .routes to fetch data from the Riot API:

/summoner: Returns data of type Summoner.
/matches: Returns data of type MatchData.

## Technologies Used

TypeScript: For type safety and improved development experience.
Riot Games API: To fetch game data.
Express: to handle the routes

## API Endpoints

### `/summoner`

-   **Description**: Fetches and returns data of type `Summoner`.
-   **Method**: `GET`
-   **Response**: JSON object containing summoner information.

#### Example Response

```json
{
    "summonerDTO": {
        "id": "string",
        "accountId": "string",
        "puuid": "string",
        "profileIconId": "number",
        "revisionDate": "number",
        "summonerLevel": "number"
    },
    "summonerRank": [
        {
            "leagueId": "string",
            "queueType": "string",
            "tier": "string",
            "rank": "string",
            "summonerId": "string",
            "leaguePoints": "number",
            "wins": "number",
            "losses": "number",
            "veteran": "boolean",
            "inactive": "boolean",
            "freshBlood": "boolean",
            "hotStreak": "boolean"
        }
    ]
}
```

### `/matches`

-   **Description**: Fetches and returns data of type `MatchData`..
-   **Method**: `GET`
-   **Response**: JSON object containing match data.

#### Example Response

```json
{
    "metadata": {
        "dataVersion": "string",
        "matchId": "string",
        "participants": [
            "string",
            "string",
            "string",
            "string",
            "string",
            "string",
            "string",
            "string",
            "string",
            "string"
        ]
    },
    "info": {
        "participants": [
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            },
            {
                "championId": "number",
                "championName": "string",
                "kills": "number",
                "deaths": "number",
                "assists": "number",
                "puuid": "string"
            }
        ]
    }
}
```

## Usage

You need to provide the information through the headers of the request.

### Headers to get Summoner

```json
{
    "name": "string",
    "tag": "string",
    "country": "countryType "
}
```

read more about countryType in [types](./types/riotApiTypes.d.ts) file.

### Headers to get Matches

```json
{
    "name": "string",
    "tag": "string",
    "country": "countryType ",
    "count": "number",
    "type": "string"
}
```

read more about matches type in [types](./types/riotApiTypes.d.ts) file.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file for details.
