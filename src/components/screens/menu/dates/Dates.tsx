import cn from 'clsx'
import { FC } from 'react'

import getDatesOfWeek from 'src/utils/getDatesOfWeek'

import styles from './Dates.module.scss'
import { IDatesProps } from './dates.interface'

const Dates: FC<IDatesProps> = ({ activeDate, setActiveDate }) => {
	const dates = getDatesOfWeek()

	const onClickDateButton = (date: string) => setActiveDate(date)

	return (
		<div className={styles.dates}>
			{dates.map(date => (
				<button
					key={date}
					onClick={() => onClickDateButton(date)}
					type='button'
					className={cn(date === activeDate && styles.active, 'button')}
				>
					{date}
				</button>
			))}
		</div>
	)
}

export default Dates
