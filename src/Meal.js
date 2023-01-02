import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const Meal = () => {
    
    const [food, setFood] = useState([])
    
    const fetchFood = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setFood(data.meals)
    }
    useEffect(() => {
        fetchFood();
    }, [Meal]);

    return (
        <div className='meal-container'>
        <section className="meals">
            {food.map((f) => {
                const {idMeal, strMeal, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4,
                     strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11,
                        strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20} = f;
                        
                return (
                    <article key={idMeal} className='meal-article'>
                        <div className='meal-section-1'>
                            <h1 className='title1'>Meal Suggestion Generator</h1>
                            <h2>{strMeal}</h2>
                            <div className="underline"></div>
                            <img src={strMealThumb} alt={strMeal} style={{width: '250px'}}/>
                        </div>
                        <div className='meal-section-2'>
                            <div className='button'>
                                <button onClick={() => fetchFood()} className="btn">Get A Meal</button>
                            </div>
                            <div className='home-return-box'>
                                <Link to="/" className='home-nav'>Back to Home</Link>
                            </div>
                        </div>
                        <div className='meal-section-3'>
                        <h3 className='howto'>How to Cook</h3>
                        <div className='underline2'></div>
                        <p>{strInstructions}</p>
                        <h4 className='ingredients'>Ingredients:</h4>
                        <div className='ingredients-div'>
                            <ul className='one'>
                                {strIngredient1.length > 0 ? <li>{strIngredient1}</li> : null}
                                {strIngredient2.length > 0 ? <li>{strIngredient2}</li> : null}
                                {strIngredient3.length > 0 ? <li>{strIngredient3}</li> : null}
                                {strIngredient4.length > 0 ? <li>{strIngredient4}</li> : null}
                                {strIngredient5.length > 0 ? <li>{strIngredient5}</li> : null}
                                {strIngredient6.length > 0 ? <li>{strIngredient6}</li> : null}
                                {strIngredient7.length > 0 ? <li>{strIngredient7}</li> : null}
                                {strIngredient8.length > 0 ? <li>{strIngredient8}</li> : null}
                                {strIngredient9.length > 0 ? <li>{strIngredient9}</li> : null}
                                {strIngredient10.length > 0 ? <li>{strIngredient10}</li> : null}
                            </ul>
                            <ul className='two'>
                                {strIngredient11.length > 0 ? <li>{strIngredient11}</li> : null}
                                {strIngredient12.length > 0 ? <li>{strIngredient12}</li> : null}
                                {strIngredient13.length > 0 ? <li>{strIngredient13}</li> : null}
                                {strIngredient14.length > 0 ? <li>{strIngredient14}</li> : null}
                                {strIngredient15.length > 0 ? <li>{strIngredient15}</li> : null}
                                {strIngredient16.length > 0 ? <li>{strIngredient16}</li> : null}
                                {strIngredient17.length > 0 ? <li>{strIngredient17}</li> : null}
                                {strIngredient18.length > 0 ? <li>{strIngredient18}</li> : null}
                                {strIngredient19.length > 0 ? <li>{strIngredient19}</li> : null}
                                {strIngredient20.length > 0 ? <li>{strIngredient20}</li> : null}
                            </ul>
                        </div>
                        </div>
                    </article>
                )
            })}
        </section>
        </div>
    )
}