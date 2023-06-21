import { Dispatch, SetStateAction } from 'react'

export type TariffType = 'Завтрак' | 'Похудение' | 'Поддержание' | 'Набор'

export interface ITariff {
	type: TariffType
	calories: number
}

export interface ITariffProps {
	activeTariffType: TariffType
	setActiveTariffType: Dispatch<SetStateAction<TariffType>>
}
