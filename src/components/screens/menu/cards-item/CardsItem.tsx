/* eslint-disable import/extensions */
import cn from 'clsx'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as PlusIcon } from 'src/assets/icons/plus.svg'
import { ReactComponent as TrashIcon } from 'src/assets/icons/trash.svg'

import { removeProduct } from 'src/store/product/slice'

import { ICardsItemProps } from './CardsItem.interface'
import styles from './CardsItem.module.scss'

const CardsItem: FC<ICardsItemProps> = ({
	onClickPlusButton,
	onClickReplaceButton,
	isSelected,
	type,
	index,
	product,
	date
}) => {
	const dispatch = useDispatch()

	const onRemoveButtonClick = () => {
		if (product) dispatch(removeProduct({ item: product, date }))
	}

	return (
		<div className={cn(styles.card, !isSelected && styles.add)}>
			{isSelected ? (
				<>
					<img src={product?.imageUrl} alt='food' />
					<div className={styles.card__info}>
						<h5>{product?.periodOfEating}</h5>
						<h4>{product?.title}</h4>
						<h6>
							{product?.calories} Ккал, {product?.weight}г
						</h6>
						<div className={styles.button__group}>
							<button
								onClick={() => onClickReplaceButton(index)}
								type='button'
								className={cn(styles.button, 'button')}
							>
								Заменить
							</button>
							<button
								onClick={onRemoveButtonClick}
								type='button'
								className={cn(styles.button, styles.remove, 'button')}
							>
								<TrashIcon />
							</button>
						</div>
					</div>
				</>
			) : (
				<>
					<h3>Добавить {type}</h3>
					<button type='button' onClick={() => onClickPlusButton(index)}>
						<PlusIcon />
					</button>
				</>
			)}
		</div>
	)
}

export default CardsItem
