import { IProductItem } from 'src/shared/menu.types'

export interface ICardsItemProps {
	isSelected: boolean
	type: 'напиток' | 'блюдо'
	index: number
	product?: IProductItem
	date: string
	onClickPlusButton: (index: number) => void
	onClickReplaceButton: (index: number) => void
}
