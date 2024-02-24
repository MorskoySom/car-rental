import styled from 'styled-components';

export const MoreBtn = styled.button`
  padding: 8px 16px; 
  margin-top: 20px;
  background: linear-gradient(to bottom, #3470ff, #ffffff);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
  display: inline-block;
  color: black;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;  
  height: 60px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`