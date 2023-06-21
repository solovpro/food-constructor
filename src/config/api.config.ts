export const IS_PRODUCTION = process.env.APP_ENV === 'production'

export const API_URL = `https://639b978b31877e43d68f9e9e.mockapi.io/`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getMenuUrl = (string: string) => `${string}`
