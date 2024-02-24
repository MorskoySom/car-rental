import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'
import { OneGalleryItem } from 'components/OneGalleryItem/OneGalleryItem';
import { GalleryView } from './CarsGallery.styled';
import { Filter } from 'components/Filter/Filter';
import { Btn } from 'components/Layout/LoadMoreBtn/LoadMoreBtn';

export const CarGallery = () => {
    const [datacars, setDataCars] = useState([])
    const [page, setPage] = useState(1)    

    useEffect(() => {
        const fetchDataAsync = async () => {
            
            const data = await fetchData(page)
            setDataCars(data)
        }

        fetchDataAsync()
    }, [page])

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };    

    return (
        <>
            <Filter />
            <GalleryView>
                {datacars.map((car) => (
                    <OneGalleryItem data={car} key={car.id} />
                ))}
            </GalleryView>
            <Btn onClick={handleLoadMore} />
        </>
    );
};
