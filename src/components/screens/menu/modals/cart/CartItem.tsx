import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { decreaseCount, increaseCount } from 'src/store/product/slice'

import styles from './Cart.module.scss'
import { ICartItemProps } from './cart.interface'

const CartItem: FC<ICartItemProps> = ({ date, products }) => {
	const dispatch = useDispatch()

	const onClickPlusButton = (id: string) =>
		dispatch(increaseCount({ id, date }))

	const onClickMinusButton = (id: string) =>
		dispatch(decreaseCount({ id, date }))

	return (
		<div className={styles.order__body__cart__body__item}>
			<div className={styles.order__body__cart__body__item__header}>
				<h5>Заказ на {date}</h5>
			</div>
			<div className={styles.order__body__cart__body__item__body}>
				{products.map(product => (
					<div
						key={product.id}
						className={styles.order__body__cart__body__item__body__item}
					>
						<div
							className={styles.order__body__cart__body__item__body__item__img}
						>
							<img src={product.imageUrl} alt='product' />
						</div>
						<div
							className={styles.order__body__cart__body__item__body__item__info}
						>
							<h4>{product.title}</h4>
							<p>{product.description}</p>
							<span>Общий вес: {product.weight * product.count} г</span>
						</div>
						<div
							className={
								styles.order__body__cart__body__item__body__item__price
							}
						>
							<h4>{product.price * product.count} р.</h4>
							<div
								className={
									styles.order__body__cart__body__item__body__item__price__count
								}
							>
								<input
									type='number'
									value={product.count}
									onChange={() => false}
								/>
								<button
									type='button'
									onClick={() => onClickMinusButton(product.id)}
								>
									<span>-</span>
								</button>
								<button
									type='button'
									onClick={() => onClickPlusButton(product.id)}
								>
									<span>+</span>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default CartItem
