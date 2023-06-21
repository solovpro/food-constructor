import { FC } from 'react'

import styles from './Navbar.module.scss'
import NavbarItem from './NavbarItem'
import navbarData from './navbar.data'

const Navbar: FC = () => {
	return (
		<header className={styles.header}>
			<ul>
				{navbarData.map(item => (
					<NavbarItem key={item.link} name={item.name} link={item.link} />
				))}
			</ul>
		</header>
	)
}

export default Navbar
