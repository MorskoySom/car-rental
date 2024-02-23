import { FilterCont, FilterElement, FilterBtnSubmit, FilterTitle } from './Filter.styled'
import React, { useState } from 'react'
import brands from './makes.json'
import { nanoid } from 'nanoid'


export const Filter = () => {

    const [selectedMake, setSelectedMake] = useState('')

    const handleMakeChange = (event) => {
        setSelectedMake(event.target.value)
    }


    return (
        <FilterCont>
            <FilterCont>
                <FilterElement>
                    <FilterTitle>Car brand</FilterTitle>
                    <select value={selectedMake} onChange={handleMakeChange}>
                        <option value="">Enter the text</option>
                            {brands.map((brand) => (
                                <option key={nanoid()} value={brand}>
                                    {brand}
                                </option>
                            ))}
                    </select>
                </FilterElement>
                <FilterElement>
                    <FilterTitle>Price/ 1 hour</FilterTitle>
                </FilterElement>
                <FilterElement>
                    <FilterTitle>Car mileage / km</FilterTitle>
                </FilterElement>
            </FilterCont>
            <FilterBtnSubmit>Search</FilterBtnSubmit>
        </FilterCont>
    )
        
}