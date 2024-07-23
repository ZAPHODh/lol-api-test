import { regionMap } from './regionMap'

export const getRegionByCountryCode = (countryCode: countryCode) => {
    return regionMap[countryCode]
}
