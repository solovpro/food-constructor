/* eslint-disable no-unsafe-optional-chaining */

/* eslint-disable import/extensions */
import cn from 'clsx'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { productCurrentDateSelector } from 'src/store/product/selectors'
import { addProduct, replaceProduct } from 'src/store/product/slice'

import styles from './AddProduct.module.scss'
import { IProductItemProps } from './add-product.interface'

const CarouselItem: FC<IProductItemProps> = ({
	product,
	date,
	modalType,
	setIsModalOpen
}) => {
	const dispatch = useDispatch()

	const onClickAddButton = () => {
		if (modalType === 'add') {
			dispatch(addProduct({ item: product, date }))
		} else dispatch(replaceProduct({ item: product, date }))
		setIsModalOpen(false)
	}

	const productToReplace = useSelector(productCurrentDateSelector(date))?.find(
		item =>
			item.type === product.type &&
			item.periodOfEating === product.periodOfEating
	)

	const getProductPrice = () => {
		if (modalType === 'replace' && productToReplace) {
			const difference = product.price - productToReplace.price
			return difference > 0 ? `+${difference}` : difference
		}
		return product.price
	}

	return (
		<div className={styles.wiget__add__product__body__item}>
			<div className={styles.wiget__add__product__body__item__img}>
				<img src={product.imageUrl} alt='product' />
			</div>
			<div className={styles.wiget__add__product__body__item__info}>
				<h4>{product.title}</h4>
				<p>{product.description}</p>
			</div>
			<div className={styles.wiget__add__product__body__item__price}>
				<button type='button' className={cn(styles.button, 'button')}>
					{getProductPrice()} р.
				</button>
				<button
					onClick={onClickAddButton}
					type='button'
					className={cn(styles.button, 'button')}
				>
					Выбрать
				</button>
			</div>
		</div>
	)
}

export default CarouselItem
