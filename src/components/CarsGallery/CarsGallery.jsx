import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'
import { OneGalleryItem } from 'components/OneGalleryItem/OneGalleryItem';
import { GalleryView } from './CarsGallery.styled';
import { Filter } from 'components/Filter/Filter';

export const CarGallery = () => {
    const [datacars, setDataCars] = useState([]);


    useEffect(() => {
        const fetchDataAsync = async () => {
            const data = await fetchData()
            setDataCars(data)
        }

        fetchDataAsync()
    }, [])


    return (
        <>
            <Filter />
            <GalleryView>
                {datacars.map((car) => (
                    <OneGalleryItem data={car} key={car.id} />
                ))}
            </GalleryView>
        </>
    );
};
