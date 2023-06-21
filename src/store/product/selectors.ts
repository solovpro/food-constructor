import { RootState } from '../store'

export const productSelector = (state: RootState) => state.product
export const productCurrentDateSelector =
	(date: string) => (state: RootState) =>
		state.product.find(item => item.date === date)?.items
