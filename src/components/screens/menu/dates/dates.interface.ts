import { Dispatch, SetStateAction } from 'react'

export interface IDatesProps {
	activeDate: string
	setActiveDate: Dispatch<SetStateAction<string>>
}
