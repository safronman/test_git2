import React from 'react'

const a = 1

function App() {

	const logoutHandler = () => {
		alert('logout')
	}

	return (
		<div>
			<h1>Natasha</h1>
			<input type="text" placeholder={'login'}/>
			<h2>profile</h2>
			<img src="fdsfds/sdfdsf" alt="avatar"/>
			<button onClick={logoutHandler}>logout</button>
		</div>
	)
}

export default App
