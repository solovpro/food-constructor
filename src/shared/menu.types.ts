export interface IProductItem {
	id: string
	periodOfEating: 'Завтрак' | 'Обед' | 'Ужин'
	type: 'Напиток' | 'Блюдо'
	title: string
	description: string
	weight: number
	price: number
	imageUrl: string
	calories: number
	count: number
}
