import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import About from './components/screens/about/About'
import Main from './components/screens/main/Main'
import Menu from './components/screens/menu/Menu'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Main />} />
				<Route path='menu' element={<Menu />} />
				<Route path='about' element={<About />} />
			</Route>
		</Routes>
	)
}

export default App
