import React from 'react'
import "./RecipeTile.css"

const RecipeTile = ({recipe}) => {
    return (
        <div className="recipeTile">
            <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
            <p  className="recipeTile__label" >{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeTile
