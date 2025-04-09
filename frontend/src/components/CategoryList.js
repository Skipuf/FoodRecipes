import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CategoryList() {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/categories/')
			.then(response => setCategories(response.data))
			.catch(error => console.error(error))
	}, [])

	return (
		<div className='category'>
			<h2>категории</h2>
			<ul>
				{categories.map(category => (
					<li key={category.id}>
						<Link to={`/category/${category.slug}`}>{category.name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CategoryList
