import cn from 'clsx'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './Navbar.module.scss'
import { INavbarItem } from './navbar.interface'

const NavbarItem: FC<INavbarItem> = ({ name, link }) => {
	const { pathname } = useLocation()

	return (
		<li className={styles.navbar__item}>
			<Link className={cn(pathname === link && styles.active)} to={link}>
				{name}
			</Link>
		</li>
	)
}

export default NavbarItem
