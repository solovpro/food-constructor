/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProductItem, IProductSliceState } from './types'

const initialState: IProductSliceState[] = []

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProduct(
			state,
			action: PayloadAction<{ item: IProductItem; date: string }>
		) {
			const findItem = state.find(item => item.date === action.payload.date)

			if (findItem) {
				findItem.items.push(action.payload.item)
			} else
				state.push({ items: [action.payload.item], date: action.payload.date })
		},
		replaceProduct(
			state,
			action: PayloadAction<{ item: IProductItem; date: string }>
		) {
			const payloadItem = action.payload.item

			const findItem = state.find(item => item.date === action.payload.date)
			const index = findItem && state.indexOf(findItem)

			if (typeof index === 'number') {
				const findReplaceItem = state[index].items.find(
					item =>
						item.type === payloadItem.type &&
						item.periodOfEating === payloadItem.periodOfEating
				)

				const indexOfReplaceItem =
					findReplaceItem && state[index].items.indexOf(findReplaceItem)

				if (typeof indexOfReplaceItem === 'number')
					state[index].items = [
						state[index].items.slice(0, indexOfReplaceItem),
						payloadItem,
						state[index].items.slice(indexOfReplaceItem + 1)
					].flat()
			}
		},
		removeProduct(
			state,
			action: PayloadAction<{ item: IProductItem; date: string }>
		) {
			const findItem = state.find(item => item.date === action.payload.date)
			const index = findItem && state.indexOf(findItem)

			if (typeof index === 'number')
				state[index].items = state[index].items.filter(
					item => item.id !== action.payload.item.id
				)
		},
		increaseCount(state, action: PayloadAction<{ id: string; date: string }>) {
			const findItem = state.find(item => item.date === action.payload.date)
			const index = findItem && state.indexOf(findItem)

			if (typeof index === 'number')
				state[index].items = state[index].items.map(item => {
					if (item.id === action.payload.id)
						return { ...item, count: item.count + 1 }
					return item
				})
		},
		decreaseCount(state, action: PayloadAction<{ id: string; date: string }>) {
			const findItem = state.find(item => item.date === action.payload.date)
			const index = findItem && state.indexOf(findItem)

			if (typeof index === 'number')
				state[index].items = state[index].items.map(item => {
					if (item.id === action.payload.id) {
						if (item.count !== 1) return { ...item, count: item.count - 1 }
					}
					return item
				})
		}
	}
})

export const {
	addProduct,
	replaceProduct,
	removeProduct,
	increaseCount,
	decreaseCount
} = productSlice.actions

export default productSlice.reducer
