import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="d24e7cb200b84b3883b4d3cf2aec6b4c";//in real life put this under some environment variables

export default function Search({foodData,setFoodData}){
    const [query,SetQuery]=useState("pizza");
    //syntax of use effect hook
    useEffect(()=>{
        async function fetchFood(){
            const res=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data=await res.json();
            // console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    },[query]);
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} value={query} onChange={(e)=>SetQuery(e.target.value)} type="text"/>
        </div>
    );
}