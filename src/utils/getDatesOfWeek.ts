/* eslint-disable no-plusplus */
const getDatesOfWeek = () => {
	const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
	const months = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12'
	]

	const getDay = (timestamp: number) => days[new Date(timestamp).getDay()]
	const getDate = (timestamp: number) => new Date(timestamp).getDate()
	const getMonth = (timestamp: number) => months[new Date(timestamp).getMonth()]

	const datesOfWeek = []

	for (let i = 0; i < 7; i++) {
		const timestamp = new Date().getTime() + i * 8.64e7
		datesOfWeek.push(
			`${getDay(timestamp)} ${getDate(timestamp)}.${getMonth(timestamp)}`
		)
	}

	return datesOfWeek
}

export default getDatesOfWeek
