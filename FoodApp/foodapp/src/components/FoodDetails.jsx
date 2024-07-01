import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "d24e7cb200b84b3883b4d3cf2aec6b4c"; //in real life put this under some environment variables
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      //   console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImg} src={food.image} alt="No image found" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serves {food.servings} people</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : "🍖 Non-Vegan"}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>$ {food.pricePerServing / 100} Per serving </strong>
          </span>
        </div>
        <h2>Ingredients : </h2>
        <ItemList key={foodId} food={food} isLoading={isLoading}/>
        <h2> Instructions : </h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
