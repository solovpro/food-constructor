import ReactDOM from 'react-dom/client'

import App from './App'
import './assets/styles/default.scss'
import MainProvider from './providers/MainProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<MainProvider>
		<App />
	</MainProvider>
)
