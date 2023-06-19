import React from 'react'
import styled from 'styled-components'
// import hero from "../Assets/hero.jpeg"
// import hero from "../Assets/blogg.jpg"
import hero from "../Assets/hero2.jpeg"
import GlobalButton from '../Components/Static/GlobalButton'

const Hero = () => {
  return (
    <div>
        <Container>
            <Wrapper>
              <Title>
                Get Your New Book With Best  Price Find Your Book Now
                </Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.
                </Desc>
                <SearchBox>
                    <Input placeholder='KeyWord'/>
                    <Dash></Dash>
                    <Select>
                        <option value="Category">Category</option>
                        <option value="Education">Education</option>
                        <option value="Fine Art">Fine Art</option>
                        <option value="History">History</option>
                    </Select>
                    <Dash></Dash>
                    <Select>
                        <option value="Writer">Writer</option>
                        <option value="Dc Valerian">Dc Valerian</option>
                        <option value="Willams Daniel">Willams Daniel</option>
                        <option value="Thywill">Thywill </option>
                    </Select>
                    <GlobalButton text='Search' bcc='#EA530D' width='100px' height='40px'/>
                </SearchBox>
                {/* <Links>
                </Links> */}
            </Wrapper>
        </Container>
    </div>
  )
}

export default Hero

const Select = styled.select`
/* border-right: 1px solid black; */
width: 170px;
height: 100%;
border: none;
outline: none;
margin-left: 7px;
font-size: 15px;
margin-right: 7px;

`
const Dash = styled.div`
  width: 2px;
  height: 18px;
  background-color: gray;
`

const Input = styled.input`
outline: none;
border: none;
padding-left: 15px;

::placeholder{
  font-size: 15px;
}
`


const Links = styled.div``

const SearchBox = styled.div`
   width: 50%;
    height: 65px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-top: 13px;
    overflow: hidden;
    align-items: center;
`

const Desc = styled.div`
text-align: center;
margin-top: 35px;
font-size: 20px;
line-height: 30px;
font-weight: 400;
color: silver;
width: 45%;
`

const Title = styled.div`
font-weight: 700;
font-size: 48px;
text-align: center;
width: 42%;
margin: 0;
color: white;
line-height: 60px;


`


const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.8);
padding-bottom: 180px;
padding-top: 180px;
/* background-color: yellow; */
`

const Container = styled.div`
width: 100%;
display: flex;
background-image: url(${hero});
background-repeat: no-repeat;
background-position: center;
background-size:cover;
`