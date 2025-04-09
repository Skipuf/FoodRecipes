import axios from 'axios'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const parseSteps = rawText => {
	return rawText
		.split(' | ')
		.filter(Boolean)
		.map((text, index) => ({
			step: index + 1,
			text: text.replace('|', '').trim(),
		}))
}

function RecipeDetail() {
	const { slug } = useParams()
	const [recipe, setRecipe] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/recipes/${slug}/`)
			.then(response => setRecipe(response.data))
			.catch(error => console.error(error))
	}, [slug])

	if (!recipe) {
		return (
			<div className='recipe-detail'>
				<h2>Загрузка...</h2>
				<div className='loader'></div>
			</div>
		)
	}

	const stepsIngredients = parseSteps(recipe.ingredients)
	const stepsInstructions = parseSteps(recipe.instructions)

	return (
		<div className='recipe-detail'>
			<h2>{recipe.title}</h2>
			<img src={recipe.image_url} alt={recipe.title} />
			<div className='description'>
				<h3>Описание:</h3>
				<p>{parse(recipe.description)}</p>
			</div>

			<div className='ingredients'>
				<h3>Что потребуется для приготовления?</h3>
				<h4>Ингредиенты:</h4>
				<ul>
					{stepsIngredients.map(({ step, text }) => (
						<li key={step + ' ingredients'}>{text}</li>
					))}
				</ul>
			</div>

			<div className='instructions'>
				<h3>Инструкции:</h3>
				<ul>
					{stepsInstructions.map(({ step, text }) => (
						<li key={step + ' instructions'}>
							<strong>Шаг {step}:</strong> {text}
						</li>
					))}
				</ul>
			</div>

			<button className='back-button' onClick={() => navigate(-1)}>
				Назад
			</button>
		</div>
	)
}

export default RecipeDetail
