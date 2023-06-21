import cn from 'clsx'
import { FC } from 'react'
import Carousel from 'react-multi-carousel-18'
import 'react-multi-carousel-18/lib/styles.css'

import { ReactComponent as CloseIcon } from 'src/assets/icons/x-mark.svg'

import styles from './AddProduct.module.scss'
import CarouselItem from './CarouselItem'
import { IAddProductProps } from './add-product.interface'

const AddProduct: FC<IAddProductProps> = ({
	products,
	date,
	modalType,
	setIsModalOpen
}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 2
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	}

	const periodOfEating = products && products?.[0].periodOfEating.toLowerCase()

	const onClickCloseButton = () => setIsModalOpen(false)

	return (
		<div className={styles.wiget__add__product}>
			<div className={styles.wiget__add__product__content}>
				<div className={styles.wiget__add__product__header}>
					<h4>
						Выбрать {periodOfEating} на {date}
					</h4>
					<button
						type='button'
						className={cn(styles.button, 'button')}
						onClick={onClickCloseButton}
					>
						<CloseIcon />
					</button>
				</div>
				<div className={styles.wiget__add__product__body}>
					{products ? (
						<Carousel
							swipeable
							draggable
							showDots
							responsive={responsive}
							ssr={false}
							infinite={false}
							autoPlay={false}
							autoPlaySpeed={1000}
							keyBoardControl
							customTransition='all 1s ease-in-out'
							transitionDuration={500}
							containerClass='carousel-container'
							removeArrowOnDeviceType={['tablet', 'mobile']}
							deviceType='desktop'
							dotListClass='custom-dot-list-style'
							itemClass='carousel-item-padding-40-px'
						>
							{products.map(product => (
								<CarouselItem
									key={product.id}
									product={product}
									date={date}
									modalType={modalType}
									setIsModalOpen={setIsModalOpen}
								/>
							))}
						</Carousel>
					) : (
						<h3>Произошла ошибка. Прожалуйста, повторите попытку</h3>
					)}
				</div>
			</div>
		</div>
	)
}

export default AddProduct
