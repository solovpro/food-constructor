import { TariffType } from 'src/components/screens/menu/tariffs/tariffs.interface'

import { IProductItem } from 'src/shared/menu.types'

const filterProducts = (
	products: IProductItem[],
	tariff: TariffType,
	index: number
) => {
	if (tariff === 'Завтрак') {
		switch (index) {
			case 0:
				return products.filter(
					product =>
						product.type === 'Напиток' && product.periodOfEating === 'Завтрак'
				)
			default:
				return products.filter(
					product =>
						product.type === 'Блюдо' && product.periodOfEating === 'Завтрак'
				)
		}
	}

	if (tariff === 'Похудение') {
		switch (index) {
			case 0:
				return products.filter(
					product =>
						product.type === 'Напиток' && product.periodOfEating === 'Завтрак'
				)
			case 1:
				return products.filter(
					product =>
						product.type === 'Напиток' && product.periodOfEating === 'Обед'
				)
			case 2:
				return products.filter(
					product =>
						product.type === 'Блюдо' && product.periodOfEating === 'Завтрак'
				)
			default:
				return products.filter(
					product =>
						product.type === 'Блюдо' && product.periodOfEating === 'Обед'
				)
		}
	}

	switch (index) {
		case 0:
			return products.filter(
				product =>
					product.type === 'Напиток' && product.periodOfEating === 'Завтрак'
			)
		case 1:
			return products.filter(
				product =>
					product.type === 'Напиток' && product.periodOfEating === 'Обед'
			)
		case 2:
			return products.filter(
				product =>
					product.type === 'Напиток' && product.periodOfEating === 'Ужин'
			)
		case 3:
			return products.filter(
				product =>
					product.type === 'Блюдо' && product.periodOfEating === 'Завтрак'
			)
		case 4:
			return products.filter(
				product => product.type === 'Блюдо' && product.periodOfEating === 'Обед'
			)
		default:
			return products.filter(
				product => product.type === 'Блюдо' && product.periodOfEating === 'Ужин'
			)
	}
}

export default filterProducts
