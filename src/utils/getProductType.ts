import { TariffType } from 'src/components/screens/menu/tariffs/tariffs.interface'

const getProductType = (
	tariffType: TariffType,
	index: number
): 'напиток' | 'блюдо' => {
	switch (tariffType) {
		case 'Завтрак':
			return index === 0 ? 'напиток' : 'блюдо'
		case 'Похудение':
			return index < 2 ? 'напиток' : 'блюдо'
		default:
			return index < 3 ? 'напиток' : 'блюдо'
	}
}

export default getProductType
