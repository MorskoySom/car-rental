import { DescrItem, DescrContainer, GalleryItem, Image, TitleMake, TitleModel, TitleContainer, TitleContainerName } from "./OneGalleryItem.styled"

export const OneGalleryItem = ({ data }) => {
    const city = data.address.split(', ')[1];
    const country = data.address.split(', ')[2];
    
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
            <DescrContainer>
                <DescrItem>{ city }</DescrItem>
                <DescrItem>{ country }</DescrItem>
                <DescrItem>{ data.rentalCompany}</DescrItem>
                <DescrItem></DescrItem>                    
            </DescrContainer>
            <DescrContainer>
                <DescrItem>{ data.type }</DescrItem>
                <DescrItem>{ data.id }</DescrItem>
                <DescrItem>{ data.functionalities[0]}</DescrItem>
                <DescrItem></DescrItem>
            </DescrContainer>
            
        </GalleryItem>
    )
}
