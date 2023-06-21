import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'
import Navbar from './navbar/Navbar'

const Layout: FC = () => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout
