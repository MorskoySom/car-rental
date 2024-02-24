import React from 'react'
import { ModalSvgClose, TotalModal, CarMileage, CarRentalCond, ItemBlockData, ItemBlock, DriverBlock, RentalCondBox, DescrContainerModalTwo, NextDescrModal, DescrModal, DescrContainerModal, TitleContainerNameModal, TitleModelModal, TitleMakeModal, TitleContainerModal, ImageModal, RentalCarBtn } from './Modal.styled'
import { DescrItem } from 'components/OneGalleryItem/OneGalleryItem.styled'



export const ModalWindow = ({ data, closeModal }) => {

    const rentalConditions = data.rentalConditions
    const conditionsArray = rentalConditions.split('\n')
    let minimumAge    
    conditionsArray.forEach(condition => {        
        if (condition.includes("Minimum age:")) {          
          minimumAge = parseInt(condition.replace("Minimum age: ", ""));
        }
    });
    

    const city = data.address.split(', ')[1];
    const country = data.address.split(', ')[2];

    return (     
        <TotalModal>
            <ModalSvgClose
                onClick={closeModal}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M18 6L6 18" stroke="#121417" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke="#121417" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </ModalSvgClose>
            <ImageModal src={data.img} alt={data.make} />             
            <TitleContainerModal>
                <TitleContainerNameModal>
                    <TitleMakeModal>
                        {data.make} <TitleModelModal>{data.model},</TitleModelModal>
                    </TitleMakeModal>                    
                    <TitleMakeModal>
                        {data.year}
                    </TitleMakeModal>
                </TitleContainerNameModal>
            </TitleContainerModal>
            <DescrContainerModal>
                <DescrItem>{ city }</DescrItem>
                <DescrItem>{ country }</DescrItem>
                <DescrItem>{ data.rentalCompany}</DescrItem>
                <DescrItem></DescrItem>                    
            </DescrContainerModal>
            <DescrContainerModal>
                <DescrItem>{ data.type }</DescrItem>
                <DescrItem>{ data.id }</DescrItem>
                <DescrItem>{ data.functionalities[0]}</DescrItem>
                <DescrItem></DescrItem>
            </DescrContainerModal>
            <DescrModal>
                { data.description}
            </DescrModal>
            <NextDescrModal>
                Accessories and Functionalities
            </NextDescrModal>
            <DescrContainerModalTwo>
                <DescrItem>{ data.accessories[0] }</DescrItem>
                <DescrItem>{data.accessories[1]}</DescrItem>
                <DescrItem>{ data.accessories[2] }</DescrItem>
            </DescrContainerModalTwo>
            <DescrContainerModalTwo>
                <DescrItem>{data.functionalities[0]}</DescrItem>
                <DescrItem>{data.functionalities[1]}</DescrItem>
                <DescrItem>{ data.functionalities[2]}</DescrItem>
            </DescrContainerModalTwo>
            <NextDescrModal>
                Rental Conditions:
            </NextDescrModal>
            <RentalCondBox>
                <DriverBlock>
                    <ItemBlock>Minimum age: <ItemBlockData>{ minimumAge }</ItemBlockData></ItemBlock>
                    <ItemBlock>Valid driver`s license</ItemBlock>
                </DriverBlock>
                <DriverBlock>
                    <CarRentalCond>rentalConditions.last</CarRentalCond>
                    <CarMileage>Mileage: <ItemBlockData>{data.mileage}</ItemBlockData></CarMileage>
                    <ItemBlock>Price: <ItemBlockData>{ data.rentalPrice }</ItemBlockData></ItemBlock>
                </DriverBlock>
                <RentalCarBtn>Rental car</RentalCarBtn>
            </RentalCondBox>        
        </TotalModal>
    )
}
