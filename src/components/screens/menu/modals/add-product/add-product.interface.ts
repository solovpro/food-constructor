import { Dispatch, SetStateAction } from 'react'

import { IProductItem } from 'src/shared/menu.types'

export interface IAddProductProps {
	products?: IProductItem[]
	date: string
	modalType: 'add' | 'replace'
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface IProductItemProps {
	product: IProductItem
	date: string
	modalType: 'add' | 'replace'
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
