import styled from 'styled-components';

export const GalleryItem = styled.li`
  
  width: 274px;
  height: 426px;  
  border-radius: 14px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
 `;

export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
padding-top: 14px;
padding-right: 10px;
`
export const TitleContainerName = styled.div`
display: flex;
`

export const TitleModel = styled.span`
  font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
color: #3470FF;
`

export const TitleMake = styled.div`
font-family: "Manrope", sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
color: #121417; 
`
export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;