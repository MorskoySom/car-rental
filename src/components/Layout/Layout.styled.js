import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    display: flex;  
    flex-direction: column;
`

export const Hat = styled.header`
display: flex;
justify-content: center;
gap: 150px;
height: 60px;
background: linear-gradient(to bottom, #ffffff, #3470ff);
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

export const Linka = styled(NavLink)`
color: white;
margin: 0 20px 0 20px;
text-decoration: none;
font-weight: 600;
font-size: 20px;
padding-top: 15px;

  &.active {
    color: black;
  }
`