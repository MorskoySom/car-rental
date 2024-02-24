import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'
import { OneGalleryItem } from 'components/OneGalleryItem/OneGalleryItem';
import { GalleryView } from './CarsGallery.styled';
import { Filter } from 'components/Filter/Filter';

export const CarGallery = () => {
    const [datacars, setDataCars] = useState([]);


    useEffect(() => {
        const fetchDataAsync = async () => {
            const data = await fetchData();
            setDataCars(data);
        };

        fetchDataAsync();
    }, []);



    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://65d7c1b127d9a3bc1d7bc0a4.mockapi.io/adverts');
    //             setDataCars(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);

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