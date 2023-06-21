import cn from 'clsx'
import { FC, useState } from 'react'

import { ReactComponent as CloseIcon } from 'src/assets/icons/x-mark.svg'

import { productSelector } from 'src/store/product/selectors'
import { useAppSelector } from 'src/store/store'

import styles from './Cart.module.scss'
import CartItem from './CartItem'
import { ICartProps } from './cart.interface'

const discountButtonsData = [
	{ period: 2 },
	{ period: 6, discount: 7 },
	{ period: 12, discount: 10 }
]

const Cart: FC<ICartProps> = ({ setIsCartModalOpen }) => {
	const [activeDiscountButton, setActiveDiscountButton] = useState(0)
	const discount = discountButtonsData[activeDiscountButton].discount || 0

	const orders = useAppSelector(productSelector)

	const products = orders.map(order => order.items).flat()

	const totalPrice = +(
		products.reduce((sum, product) => sum + product.price * product.count, 0) *
		(1 - discount / 100)
	).toFixed(2)
	const totalWeight =
		products.reduce((sum, product) => sum + product.weight * product.count, 0) /
		1000
	const totalCount = products.reduce((sum, product) => sum + product.count, 0)
	const totalDiscount =
		products.reduce((sum, product) => sum + product.price * product.count, 0) -
		totalPrice

	const onClickCloseButton = () => setIsCartModalOpen(false)

	return (
		<div className={styles.order}>
			<div className={styles.order__body}>
				<div className={styles.order__body__cart}>
					<div className={styles.order__body__cart__header}>
						<h3>Корзина</h3>
						<button
							type='button'
							onClick={onClickCloseButton}
							className={cn(styles.button, 'button')}
						>
							<CloseIcon />
						</button>
					</div>
					<div className={styles.order__body__cart__body}>
						{orders.length ? (
							orders.map(order => (
								<CartItem
									key={order.date}
									date={order.date}
									products={order.items}
								/>
							))
						) : (
							<h3>Добавьте что-нибудь в корзину</h3>
						)}
					</div>
				</div>
				<div className={styles.order__body__info}>
					<div className={styles['order__body__info__data-delivery']}>
						<div>
							<button type='button' className={cn(styles.button, 'button')}>
								Перейти к оформлению
							</button>
						</div>
						<div>
							<button type='button' className={styles.delivery}>
								<span>Доставка: </span>
								<span>{orders[0].date}</span>
							</button>
						</div>
						<div className={styles.cart}>
							<div>
								<h5>Ваша корзина</h5>
								<span>
									{totalCount} товаров · {totalWeight}кг
								</span>
							</div>
							<div>
								<span>Товары ({totalCount})</span>
								<span>{totalPrice} Р</span>
							</div>
							<div>
								<span>Скидка</span>
								<span>- {totalDiscount} Р</span>
							</div>
						</div>
						<div className={styles.total}>
							<h4>Общая стоимость</h4>
							<span>{totalPrice} Р</span>
						</div>
					</div>
					<div className={styles['order__body__info__data-days']}>
						<h4>Оплата сразу</h4>
						<div>
							{discountButtonsData.map((item, index) => (
								<button
									key={item.period}
									type='button'
									onClick={() => setActiveDiscountButton(index)}
									className={cn(
										index === activeDiscountButton && styles.active,
										'button'
									)}
								>
									<p>{item.period} дней</p>
									{item.discount && <span>Выгода {item.discount}%</span>}
								</button>
							))}
						</div>
					</div>
					<div className={styles['order__body__info__data-user']}>
						<div className={styles.phone}>
							<input type='tel' placeholder='Введите номер телефона' />
							<span>Для уточнения деталей заказа и доставки</span>
						</div>
						<div className={styles.address}>
							<h4>Выберите адрес доставки</h4>
							<input type='text' placeholder='Введите адрес' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
