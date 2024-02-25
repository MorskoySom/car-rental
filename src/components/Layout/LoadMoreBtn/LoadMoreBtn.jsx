import { MoreBtn } from "./Button.styled"

export const Btn = ({ onClick }) => {
    return (<MoreBtn onClick={onClick}>Load more</MoreBtn>)
}

export const ToStartBtn = ({ onClick }) => {
    return (<MoreBtn onClick={onClick}>To start</MoreBtn>)
}



