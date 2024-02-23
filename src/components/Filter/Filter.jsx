import { FilterSelectHour, FilterSelectCar, FilterCont, FilterElement, FilterBtnSubmit, FilterTitle } from './Filter.styled'
import React, { useState } from 'react'
import brands from './makes.json'
import { nanoid } from 'nanoid'

export const Filter = () => {

    const [selectedMake, setSelectedMake] = useState('')
    const [selectedHour, setSelectedHour] = useState('')

    const [fromValue, setFromValue] = useState('')
    const [toValue, setToValue] = useState('')

    const handleMakeChangeCar = (event) => {
        setSelectedMake(event.target.value)
    }

    const handleMakeChangeHour = (event) => {
        setSelectedHour(event.target.value)
    }

    const handleFromChange = (e) => {
        setFromValue(e.target.value)
    }

    const handleToChange = (e) => {
        setToValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('From:', fromValue, 'To:', toValue, 'Car:', selectedMake, 'PEr hour:', selectedHour)    
   }

    return (
        <form onSubmit={handleSubmit}>
        <FilterCont>
            <FilterCont>
                <FilterElement>
                    <FilterTitle>Car brand</FilterTitle>
                    <FilterSelectCar value={selectedMake} onChange={handleMakeChangeCar}>
                        <option value="">Enter the text</option>
                            {brands.map((brand) => (
                                <option key={nanoid()} value={brand}>
                                    {brand}
                                </option>
                            ))}
                    </FilterSelectCar>
                </FilterElement>
                <FilterElement>
                    <FilterTitle>Price/ 1 hour</FilterTitle>
                    <FilterSelectHour value={selectedHour} onChange={handleMakeChangeHour}>
                        <option value="">To $</option>
                            {Array.from({ length: 500 / 25 }, (_, index) => (
                                <option key={index} value={(index + 1) * 25}>
                                    {(index + 1) * 25}
                                </option>
                            ))}                        
                    </FilterSelectHour>
                </FilterElement>
                <FilterElement>
                    <FilterTitle>Car mileage / km</FilterTitle>
                    <div>
                        <label>
                            From{' '}
                            <input type="number" value={fromValue} onChange={handleFromChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            To{' '}
                            <input type="number" value={toValue} onChange={handleToChange} />
                        </label>
                    </div>
                </FilterElement>
            </FilterCont>
            <FilterBtnSubmit>Search</FilterBtnSubmit>
        </FilterCont>
        </form>
    )        
}