import { NextFunction, Request, Response } from 'express'

import { getRegionByCountryCode } from '../lib/utils/getRegionByCountryCode'

export const addRegion = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const countryCode = req.headers.country as countryCode
    const region = getRegionByCountryCode(
        countryCode.toUpperCase() as countryCode
    )
    req.headers.region = region
    next()
}
