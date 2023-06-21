import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import About from './components/screens/about/About'
import Menu from './components/screens/menu/Menu'
import Selection from './components/screens/selection/Selection'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Menu />} />
				<Route path='selection' element={<Selection />} />
				<Route path='about' element={<About />} />
			</Route>
		</Routes>
	)
}

export default App
