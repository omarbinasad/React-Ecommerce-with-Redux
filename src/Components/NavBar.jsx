import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { textAlign } from '@mui/system';


const Container = styled.div`
height: 60px;
`;
const Wrapper = styled.div`
display: flex;
padding: 10px 20px;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;


const Languages = styled.div`
font-size: 14px;
`

const SearchContainer = styled.div`
border:1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
outline: none;
`

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.div`
font-weight: bold;

`;


const Right = styled.div`
flex: 1;
`;



const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>             
                    <Languages>EN</Languages>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>LOGO</Logo>
                </Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    );
};

export default NavBar;