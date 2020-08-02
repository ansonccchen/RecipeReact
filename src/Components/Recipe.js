import React from 'react'
import "./styles.css"

const Recipe = ({title, image, calories, ingredients, servings}) => {
    return (
        <div className="recipe">
            <h3>{title}</h3>
            <img src={image}/>
            <h3>Calories: {Math.floor(calories)} Servings: {servings} </h3>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}


export default Recipe