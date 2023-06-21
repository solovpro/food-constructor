/* eslint-disable import/extensions */
import axios from 'axios'

import { API_SERVER_URL, API_URL, IS_PRODUCTION } from 'src/config/api.config'

import { getContentType } from './api.helpers'

const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType()
})

export default axiosClassic
