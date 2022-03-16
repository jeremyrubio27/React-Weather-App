
import { useState } from "react"
import FetchWeather from "./FetchWeather"
import styles from './Content.module.css'

const Content = () => {

    const [query, setQuery] = useState('')
    const [weather , setWeather] = useState({})

    const queryHandler = (e) => {
       setQuery(e.target.value)
    } 

    const search = async (e) => {
        if(e.key === "Enter"){
            const data = await FetchWeather(query)
            setWeather(data)
            console.log(data);
            setQuery('')
           
        }


    }


    return(
        <div className={styles.contentBody}>
           <input type="text" className={styles.search} placeholder="Search" value={query} onChange={queryHandler} onKeyPress={search}/>
           {weather.list && (
               <div>
                   <div className={styles.contentTemp}>
                        <h1>{Math.floor(weather.list[0].main.temp)}</h1>
                        <sup>&deg;C</sup>
                        <img src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}.png`} className={styles.icon}  />
                   </div>
                   <h2 className={styles.descriptions}>{weather.list[0].weather[0].description}</h2>
                   <div className={styles.contentHeader}>
                        <h1>{weather.list[0].name}</h1> 
                        <span className={styles.country}>{weather.list[0].sys.country}</span>
                   </div>
                   
                  
               </div>
           )}
        </div>
    )

}

export default Content