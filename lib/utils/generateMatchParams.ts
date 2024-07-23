export const generateMatchParams = (params: matchParams): string => {
    const queryString = Object.keys(params)
        .filter((key) => params[key as keyof matchParams] !== undefined)
        .map(
            (key) =>
                `${key}=${encodeURIComponent(params[key as keyof matchParams] as string | number)}`
        )
        .join('&')

    return queryString ? `?${queryString}` : ''
}
