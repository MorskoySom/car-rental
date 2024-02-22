import { OneGalleryItem } from 'components/OneGalleryItem/OneGalleryItem';
import { GalleryView } from './CarsGallery.styled';
import datacars from '../CarsGallery/cars.json';

export const CarGallery = () => {    
    return (
        <GalleryView>
            {datacars.map((car) => {
                return <OneGalleryItem data={car} key={car.id}/>
            })}
        </GalleryView>
    )
}
