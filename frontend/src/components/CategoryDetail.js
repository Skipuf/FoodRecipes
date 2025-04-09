import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CategoryDetail() {
	const { slug } = useParams()
	const [category, setCategory] = useState(null)

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/categories/${slug}/`)
			.then(response => setCategory(response.data))
			.catch(error => console.error(error))
	}, [slug])

	if (!category) {
		return (
			<div className='category'>
				<h2>Загрузка...</h2>
				<div className='loader'></div>
				<Link to='/' className='back-button'>
					Назад к категориям
				</Link>
			</div>
		)
	}

	return (
		<div className='category'>
			<h2>{category.name}</h2>
			<ul>
				{category.recipes.map(recipe => (
					<li key={recipe.id}>
						<Link to={`/recipe/${recipe.slug}`}>{recipe.title}</Link>
					</li>
				))}
			</ul>
			<Link to='/' className='back-button'>
				Назад к категориям
			</Link>
		</div>
	)
}

export default CategoryDetail
