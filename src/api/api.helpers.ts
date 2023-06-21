export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const errorCatch = (error: any): string => {
	if (error.response && error.response.data) {
		return typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
	}
	return error.message
}
