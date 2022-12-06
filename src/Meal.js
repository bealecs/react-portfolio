import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const Meal = () => {
    
    const [food, setFood] = useState([])
    
    const fetchFood = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setFood(data.meals)
    }
    useEffect(() => {
        fetchFood();
    }, []);

    return (
        <div className='meal-container'>
        <section className="meals">
            {food.map((f) => {
                const {idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
                     strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11,
                        strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20} = f;
                return (
                    <article key={idMeal}>
                        <h1 className='title1'>Meal Suggestion Generator</h1>
                        <div className='button'>
                            <button onClick={() => fetchFood()} className="btn">Get A Meal</button>
                        </div>
                        <div className='home-return-box'>
                            <Link to="/" className='home-nav'>Back to Home</Link>
                        </div>
                        <h2>{strMeal}</h2>
                        <div className="underline"></div>
                        <img src={strMealThumb} alt={strMeal} />
                        <h3 className='howto'>How to Cook</h3>
                        <div className='underline2'></div>
                        <p>{strInstructions}</p>
                        <h4 className='ingredients'>Ingredients:</h4>
                        <div className='ingredients-div'>
                            <ul className='one'>
                                <li>{strIngredient1}</li>
                                <li>{strIngredient2}</li>
                                <li>{strIngredient3}</li>
                                <li>{strIngredient4}</li>
                                <li>{strIngredient5}</li>
                                <li>{strIngredient6}</li>
                                <li>{strIngredient7}</li>
                                <li>{strIngredient8}</li>
                                <li>{strIngredient9}</li>
                                <li>{strIngredient10}</li>
                            </ul>
                            <ul className='two'>
                                <li>{strIngredient11}</li>
                                <li>{strIngredient12}</li>
                                <li>{strIngredient13}</li>
                                <li>{strIngredient14}</li>
                                <li>{strIngredient15}</li>
                                <li>{strIngredient16}</li>
                                <li>{strIngredient17}</li>
                                <li>{strIngredient18}</li>
                                <li>{strIngredient19}</li>
                                <li>{strIngredient20}</li>
                            </ul>
                        </div>
                    </article>
                )
            })}
        </section>
        </div>
    )
}