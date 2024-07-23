import express from 'express'
import { getSummonerID } from '../middlewares/getSummonerID'
import { addPuuid } from '../middlewares/addPuuid'
import { addRegion } from '../middlewares/addRegion'
import { validateHeaders } from '../middlewares/validateHeaders'
import { getMatchID } from '../middlewares/getMatchID'
import { getMatch } from '../controllers/getMatch'
import { getSummoner } from '../controllers/getSummoner'

const router = express.Router()

router.get(
    '/summoner',
    validateHeaders,
    addRegion,
    addPuuid,
    getSummonerID,
    getSummoner
)
router.get(
    '/matches',
    validateHeaders,
    addRegion,
    addPuuid,
    getMatchID,
    getMatch
)

export default router
