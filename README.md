# Riot API Test Project

This project is a test application that interacts with the Riot Games API, built using TypeScript.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/lol-api-test.git
```

Navigate to the project directory:

```bash
cd lol-api-test
```

Install dependencies:

```bash
npm install
```

## Project Overview

The application provides two GET routes to fetch data from the Riot API:

/summoner: Returns data of type Summoner.
/matches: Returns data of type MatchData.

## Technologies Used

TypeScript: For type safety and improved development experience.
Riot Games API: To fetch game data.
Express: to handle the routes

## API Endpoints

/summoner

Description: Fetches and returns data of type Summoner.
Method: GET
Response: JSON object containing summoner information.

/matchers
Description: Fetches and returns data of type MatchData.
Method: GET
Response: JSON object containing match data.

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
[MIT](https://choosealicense.com/licenses/mit/)
