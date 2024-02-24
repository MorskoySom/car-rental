import styled from 'styled-components';

export const FilterCont = styled.div`
display: flex;
justify-content: center;
gap: 18px;
margin-top: 50px;
`

export const FilterElement = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: auto;
`

export const FilterTitle = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
color: #8a8a89;
`

export const FilterSelectCar = styled.select`
border-radius: 14px;
border: none;
padding: 14px 89px 14px 18px;
width: 224px;
height: 48px;
background: #f7f7fb;
  &:active,
  &:hover,
  &:focus {
    border: none;
    outline: none;}
`

export const FilterSelectHour = styled.select`
border-radius: 14px;
border: none;
padding: 14px 18px;
width: 125px;
height: 48px;
background: #f7f7fb;
  &:active,
  &:hover,
  &:focus {
    border: none;
    outline: none;}
`

export const FilterInputsMileage = styled.div`
display: flex;
`

export const FilterMileageItemFrom = styled.input`
border-radius: 14px 0 0 14px;
border: none;
width: 160px;
height: 48px;
padding-left: 18px;
background: #f7f7fb;
border-right: 1px solid rgba(138, 138, 137, 0.2);
  &:hover,
  &:focus {
    outline: none;}
`

export const FilterMileageItemTo = styled.input`
border-radius: 0 14px 14px 0;
border: none;
width: 160px;
height: 48px;
padding-left: 18px;
background: #f7f7fb;
  &:hover,
  &:focus {
    outline: none;}
`


export const FilterBtnSubmit = styled.button`
border-radius: 12px;
padding: 14px 44px;
width: 136px;
height: 48px;
font-family: "Manrope", sans-serif;
font-weight: 600;
font-size: 14px;
line-height: 1.42857;
color: #fff;
background: #3470ff;
margin-top: auto;
 &:hover {
    background: #0b44cd;
  }

`