import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import product from './product/slice'

export const store = configureStore({
	reducer: {
		product
	}
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
