import styles from "./foodItem.module.css";

export default function FoodItem({ food,setFoodId }) {
  return (
    <div className={styles.ItemContainer}>
      <img className={styles.ItemImage} src={food.image} alt="" />
      <div className={styles.ItemContent}>
        <p className={styles.ItemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>{setFoodId(food.id)}} className={styles.ItemButton}>View Recipe</button>
      </div>
    </div>
  );
}
