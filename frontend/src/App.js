import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CategoryDetail from './components/CategoryDetail'
import CategoryList from './components/CategoryList'
import RecipeDetail from './components/RecipeDetail'
import './styles.css'

function App() {
	return (
		<Router>
			<div className='app'>
				<header>
					<h1>Рецепты блюд</h1>
				</header>

				<Routes>
					<Route path='/' element={<CategoryList />} />
					<Route path='/category/:slug' element={<CategoryDetail />} />
					<Route path='/recipe/:slug' element={<RecipeDetail />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
