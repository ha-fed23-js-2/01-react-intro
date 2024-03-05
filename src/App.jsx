// import { useState } from 'react'
import FancyButton from './FancyButton.jsx'
import './App.css'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<main>
			<h1> Min första React-app </h1>

			<p> Mycket spännande innehåll </p>

			<FancyButton text={'Spänning'} />
			<FancyButton text={'Melodrama'} />
			<FancyButton text={'Komedi'} />
		</main>
	)
}



export default App
