import {createContext, useContext, useEffect, useState} from "react";

const CitiesContext = createContext(null)

const BASE_URL = 'http://localhost:3600'

function CitiesProvider({children}) {
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({});

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json();
                setCities(data)
            } catch {
                alert('There was an error loading data...');
            } finally {
                setIsLoading(false)
            }
        }

        fetchCities()
    }, [])

    async function getCityById(id) {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json();
            setCurrentCity(data)
        } catch {
            alert('There was an error loading data...');
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            currentCity,
            getCityById
        }}>
            {children}
        </CitiesContext.Provider>
    )
}

function useCities() {
    const context = useContext(CitiesContext)
    if (context === undefined) throw new Error('useCities must be used within a CitiesProvider')
    return context
}

export {CitiesProvider, useCities}