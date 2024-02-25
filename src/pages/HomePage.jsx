import { HomeDescr, Title, TitlePrime, PartnersCont, PartnerBox } from "./HomePage.styled"


export const Homepage = () => {
    return (
        <>
            <Title>
                Car rental in Ukraine
            </Title>
            <HomeDescr>
                Arriving in Ukraine on business or as tourists, many people are faced with the problem of free movement around the city. Short or long-term car rental at 7Cars is the best alternative to public transport or taxi. You get complete freedom of movement: you can plan the route by yourself, so you don’t have to depend on the bus schedule or the time of car delivery.
            </HomeDescr>
            <HomeDescr>
                Our company has been working in this market segment for more than six years. During this time, an extensive fleet of modern vehicles was created and a dispatch service was organized. You can easily make a request and rent a car in Kyiv – just call our office by phone or contact us via the Internet. Do not miss the unique chance to inexpensively rent a car of the class you need with or without a driver!
            </HomeDescr>
            <TitlePrime>BE MOVE LIKE YOU WONT</TitlePrime>
            <PartnersCont>
                <PartnerBox>Partner 1</PartnerBox>
                <PartnerBox>Partner 2</PartnerBox>
                <PartnerBox>Partner 3</PartnerBox>
            </PartnersCont>

        </>
    )
}