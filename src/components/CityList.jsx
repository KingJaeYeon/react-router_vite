import styles from './CityList.module.css'
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";

function CityList({cities,isLoading}) {
if (isLoading) return <Spinner/>;
console.log(cities);
 return (
  <ul className={styles.cityList}>
   {cities.map(city => <CityItem key={city.id} city={city}/>)}
  </ul>
 );}

export default CityList;