/* eslint-disable react/no-array-index-key */
import cn from 'clsx'
import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as SettingIcon } from 'src/assets/icons/setting.svg'

import { productCurrentDateSelector } from 'src/store/product/selectors'

import filterProducts from 'src/utils/filterProducts'
import getDatesOfWeek from 'src/utils/getDatesOfWeek'
import getProductType from 'src/utils/getProductType'
import getProductsCurrentDate from 'src/utils/getProductsCurrentDate'
import getTariffDescription from 'src/utils/getTariffDescription'

import styles from './Menu.module.scss'
import CardsItem from './cards-item/CardsItem'
import Dates from './dates/Dates'
import AddProduct from './modals/add-product/AddProduct'
import Cart from './modals/cart/Cart'
import Tariffs from './tariffs/Tariffs'
import { TariffType } from './tariffs/tariffs.interface'
import useMenu from './useMenu'

const Menu: FC = () => {
	const [activeTariffType, setActiveTariffType] =
		useState<TariffType>('Поддержание')
	const [activeDate, setActiveDate] = useState(getDatesOfWeek()[0])

	const [isCartModalOpen, setIsCartModalOpen] = useState(false)
	const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false)

	const [modalType, setModalType] = useState<'add' | 'replace'>('add')

	const addedProductsCurrentDate = useSelector(
		productCurrentDateSelector(activeDate)
	)

	const productsCurrentDate = getProductsCurrentDate(
		activeTariffType,
		addedProductsCurrentDate
	)

	const { allProducts } = useMenu()

	const [productIndex, setProductIndex] = useState<number>(0)
	const filteredProducts =
		allProducts && filterProducts(allProducts, activeTariffType, productIndex)

	const tariffDescription = getTariffDescription(activeTariffType)

	const onClickPlusButton = (index: number) => {
		setProductIndex(index)
		setModalType('add')
		setIsAddProductModalOpen(true)
	}
	const onClickReplaceButton = (index: number) => {
		setProductIndex(index)
		setModalType('replace')
		setIsAddProductModalOpen(true)
	}

	const onClickCartButton = () => setIsCartModalOpen(true)

	return (
		<>
			<div className={styles.menu}>
				<Tariffs
					activeTariffType={activeTariffType}
					setActiveTariffType={setActiveTariffType}
				/>
				<h3>Здоровое питание на каждый день</h3>
				<p>{tariffDescription}</p>
				<Dates activeDate={activeDate} setActiveDate={setActiveDate} />

				<div className={cn(styles.cards, styles[activeTariffType])}>
					{productsCurrentDate.map((item, index) => (
						<CardsItem
							key={index}
							index={index}
							product={item}
							date={activeDate}
							type={getProductType(activeTariffType, index)}
							onClickPlusButton={onClickPlusButton}
							onClickReplaceButton={onClickReplaceButton}
							isSelected={!!item}
						/>
					))}
				</div>

				<div className={cn(styles.button__block, styles.end__block)}>
					<button type='button' className={cn(styles.button, 'button')}>
						<SettingIcon />
						Настройка меню
					</button>
					<button
						type='button'
						onClick={onClickCartButton}
						className={cn(styles.button, styles.active, 'button active')}
					>
						Хочу это меню
					</button>
				</div>
			</div>

			{isAddProductModalOpen && (
				<AddProduct
					products={filteredProducts}
					date={activeDate}
					modalType={modalType}
					setIsModalOpen={setIsAddProductModalOpen}
				/>
			)}
			{isCartModalOpen && <Cart setIsCartModalOpen={setIsCartModalOpen} />}
		</>
	)
}

export default Menu
