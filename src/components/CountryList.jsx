import styles from './CountryList.module.css'

import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

function CountryList({cities,isLoading}) {
    if (isLoading) return <Spinner/>;

    if(!cities?.length)
        return <Message message={'Add your first city by clicking on a city on the map'}/>;

    const countries = cities.reduce((arr,city) => {
        if(!arr.map(el=>el.city).includes(city.county))
            return [...arr , {

            }]}
        ,[]);

    return (
        <ul className={styles.countryList}>
            {countries?.map(county =>
                <CountryItem key={county.id} county={county}/>)}
        </ul>
    );}

export default CountryList;