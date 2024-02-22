import { GalleryItem, Image, TitleMake, TitleModel, TitleContainer, TitleContainerName } from "./OneGalleryItem.styled"

export const OneGalleryItem = ({ data }) => {
    return (
        <GalleryItem key={data.id}>
            <div>
                <Image src={data.img} alt={data.make} />           
            </div>
            <TitleContainer>
                <TitleContainerName>                    
                    <TitleMake>
                        {data.make} <TitleModel>{data.model},</TitleModel>
                    </TitleMake>                    
                    <TitleMake>
                        {data.year}
                    </TitleMake>
                </TitleContainerName>
                <TitleMake>
                    {data.rentalPrice}
                </TitleMake>
            </TitleContainer>
            
        </GalleryItem>
    )
}
