import { Dispatch, SetStateAction } from 'react'

import { IProductItem } from 'src/shared/menu.types'

export interface ICartProps {
	setIsCartModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface ICartItemProps {
	date: string
	products: IProductItem[]
}
