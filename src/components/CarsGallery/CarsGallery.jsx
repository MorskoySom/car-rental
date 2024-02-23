import { OneGalleryItem } from 'components/OneGalleryItem/OneGalleryItem';
import { GalleryView } from './CarsGallery.styled';
import datacars from '../CarsGallery/cars.json';
import { Filter } from 'components/Filter/Filter';

export const CarGallery = () => {    
    return (
        <>
            <Filter />            
            <GalleryView>
                {datacars.map((car) => {
                    return <OneGalleryItem data={car} key={car.id}/>
                })}
            </GalleryView>        
        </>
    )
}
