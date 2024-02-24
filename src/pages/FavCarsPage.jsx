import { Filter } from "components/Filter/Filter";
import React, { useState, useEffect } from 'react';
import { GalleryView } from '../components/CarsGallery/CarsGallery.styled';
import { OneGalleryItem } from '../components/OneGalleryItem/OneGalleryItem';
import { fetchDataFavorite } from '../components/api'; 

export const FavCars = () => {
    const [favoriteCars, setFavoriteCars] = useState([]);
    const [datacars, setDataCars] = useState([]);

    const updateFavoriteCars = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteCars(storedFavorites);
    };

    useEffect(() => {        
        updateFavoriteCars();
        
        const fetchDataFromAPI = async () => {
            try {
                const data = await fetchDataFavorite(); 
                setDataCars(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataFromAPI()
    }, []);

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