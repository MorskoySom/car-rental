import { Filter } from "components/Filter/Filter"
import React, { useState, useEffect } from 'react'
import { GalleryView } from '../components/CarsGallery/CarsGallery.styled'
import { OneGalleryItem } from '../components/OneGalleryItem/OneGalleryItem'
import datacars from '../components/CarsGallery/cars.json'

export const FavCars = () => {
    const [favoriteCars, setFavoriteCars] = useState([])
    
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        setFavoriteCars(storedFavorites);
    }, [favoriteCars])

    return (
        <>
            <Filter />            
            <GalleryView>                   
                    {datacars
                        .filter(car => favoriteCars.includes(car.id))
                        .map((car) => (
                            <OneGalleryItem data={car} key={car.id} />
                        ))}
            </GalleryView>            
        </>
    );
};