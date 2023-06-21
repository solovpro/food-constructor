import cn from 'clsx'
import { FC } from 'react'

import styles from './Tariffs.module.scss'
import tariffsData from './tariffs.data'
import { ITariffProps, TariffType } from './tariffs.interface'

const Tariffs: FC<ITariffProps> = ({
	activeTariffType,
	setActiveTariffType
}) => {
	const onClickTariffItem = (type: TariffType) => setActiveTariffType(type)

	return (
		<div className={styles.tariffs}>
			{tariffsData.map(({ type, calories }) => (
				<button
					key={type}
					type='button'
					onClick={() => onClickTariffItem(type)}
					className={cn(
						styles.tariffItem,
						activeTariffType === type && 'active',
						'button'
					)}
				>
					<span>{type}</span>
					<br />
					<span>{`${calories} Ккал`}</span>
				</button>
			))}
		</div>
	)
}

export default Tariffs
