import React, { useState, useEffect } from 'react';
import { fetchData } from '../api'
import { OneGalleryItem } from 'components/OneGalleryItem/OneGalleryItem';
import { GalleryView } from './CarsGallery.styled';
import { Filter } from 'components/Filter/Filter';
import { Btn, ToStartBtn } from 'components/Layout/LoadMoreBtn/LoadMoreBtn';

export const CarGallery = () => {
    
    const [datacars, setDataCars] = useState([])
    const [page, setPage] = useState(1) 
    const [loadMore, setLoadMore] = useState(true)
    const [toStart, setToStart] = useState(false)
    

    useEffect(() => {
        const fetchDataAsync = async () => {
            const data = await fetchData(page)

            if (data.length < 11) {
            setLoadMore(false)
            setToStart(true)
            setDataCars(data)
            } else {
                setDataCars(data)
            }          
            
        }

        fetchDataAsync()
    }, [page])

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };   
    
    const handleToStart = () => {
        setPage(1)
        setToStart(false)
        setLoadMore(true)
    };

    return (
        <>
            <Filter />
            <GalleryView>
                {datacars.map((car) => (
                    <OneGalleryItem data={car} key={car.id} />
                ))}
            </GalleryView>
            {loadMore && <Btn onClick={handleLoadMore} />}
            {toStart && <ToStartBtn onClick={handleToStart} />}
        </>
    );
};
