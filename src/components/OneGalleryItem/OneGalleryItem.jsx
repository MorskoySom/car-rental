import React, { useState } from 'react'
import Modal from 'react-modal'
import {ModalWindow} from '../Modal/Modal'
import { Favor, ImageCon, LearnBtn, DescrItem, DescrContainer, GalleryItem, Image, TitleMake, TitleModel, TitleContainer, TitleContainerName } from "./OneGalleryItem.styled"

const customStyles = {
    content: {
        width: 541,
        height: 742,
        borderRadius: 24,        
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',        
    },
}

Modal.setAppElement('#root')

export const OneGalleryItem = ({ data }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

    const handleToggleFavorite = (id) => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        const index = storedFavorites.indexOf(id)
                
        if (index === -1) {
            const updatedFavorites = [...storedFavorites, id]
            setFavorites(updatedFavorites)
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
        } else {            
            const updatedFavorites = storedFavorites.filter(favId => favId !== id)
            setFavorites(updatedFavorites)
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
        }        
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const city = data.address.split(', ')[1];
    const country = data.address.split(', ')[2];
    
    return (
        <GalleryItem key={data.id}>
            <ImageCon>
                <Favor
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill={favorites.includes(data.id) ? "blue" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleToggleFavorite(data.id)}
                >
                    <path d="M15.63 2.4575C15.2469 2.07425 14.7921 1.77023 14.2915 1.56281C13.7909 1.35539 13.2544 1.24863 12.7125 1.24863C12.1706 1.24863 11.6341 1.35539 11.1335 1.56281C10.6329 1.77023 10.1781 2.07425 9.795 2.4575L9 3.2525L8.205 2.4575C7.43123 1.68373 6.38177 1.24903 5.2875 1.24903C4.19322 1.24903 3.14377 1.68373 2.37 2.4575C1.59623 3.23127 1.16153 4.28072 1.16153 5.375C1.16153 6.46927 1.59623 7.51873 2.37 8.2925L3.165 9.0875L9 14.9225L14.835 9.0875L15.63 8.2925C16.0132 7.90943 16.3173 7.45461 16.5247 6.95401C16.7321 6.45342 16.8389 5.91686 16.8389 5.375C16.8389 4.83313 16.7321 4.29657 16.5247 3.79598C16.3173 3.29539 16.0132 2.84056 15.63 2.4575Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </Favor>
                <Image src={data.img} alt={data.make} />                
            </ImageCon>
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
            <LearnBtn onClick={handleOpenModal}>Learn more</LearnBtn>
            <Modal                
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                >
                <ModalWindow data={data} closeModal={handleCloseModal} />
            </Modal>            
        </GalleryItem>
    )
}
