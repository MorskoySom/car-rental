import styled from 'styled-components';

export const FilterCont = styled.div`
display: flex;
justify-content: center;
gap: 18px;
margin-top: 50px;
`

export const FilterInputsCont = styled.div`

`

export const FilterElement = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`

export const FilterTitle = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.28571;
color: #8a8a89;
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