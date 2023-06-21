import { TariffType } from 'src/components/screens/menu/tariffs/tariffs.interface'

import { IProductItem } from 'src/store/product/types'

const getProductsCurrentDate = (
	activeTariffType: TariffType,
	addedProducts?: IProductItem[]
): (IProductItem | undefined)[] => {
	if (!addedProducts) {
		switch (activeTariffType) {
			case 'Завтрак':
				return [...new Array(2)]
			case 'Похудение':
				return [...new Array(4)]
			default:
				return [...new Array(6)]
		}
	}

	const allProductsCurrentDate = [
		addedProducts.find(
			item => item.periodOfEating === 'Завтрак' && item.type === 'Напиток'
		),
		addedProducts.find(
			item => item.periodOfEating === 'Обед' && item.type === 'Напиток'
		),
		addedProducts.find(
			item => item.periodOfEating === 'Ужин' && item.type === 'Напиток'
		),
		addedProducts.find(
			item => item.periodOfEating === 'Завтрак' && item.type === 'Блюдо'
		),
		addedProducts.find(
			item => item.periodOfEating === 'Обед' && item.type === 'Блюдо'
		),
		addedProducts.find(
			item => item.periodOfEating === 'Ужин' && item.type === 'Блюдо'
		)
	]

	switch (activeTariffType) {
		case 'Завтрак':
			return [allProductsCurrentDate[0], allProductsCurrentDate[3]]
		case 'Похудение':
			return allProductsCurrentDate.filter(
				(item, index) => index !== 2 && index !== 5
			)
		default:
			return allProductsCurrentDate
	}
}

export default getProductsCurrentDate
