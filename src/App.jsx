// import { useState } from 'react'
import './App.css'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<main>
			<h1> Min första React-app </h1>

			<p> Mycket spännande innehåll </p>

			<FancyButton />
		</main>
	)
}

// function FancyButton hade också gått
const FancyButton = () => (
	<button className="fancy"> Jag är festlig </button>
)

export default App
