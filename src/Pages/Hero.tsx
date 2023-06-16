import React from 'react'
import styled from 'styled-components'
import hero from "../Assets/hero2.jpeg"
import GlobalButton from '../Components/Static/GlobalButton'

const Hero = () => {
  return (
    <div>
        <Container>
          <Back>
            <Wrapper>
          <Wrap>
              <Title>
                Get Your New Book With Best  Price Find Your Book Now
                </Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunta sunt quaerat, eligendi ad, ipsum sit culpa porro fuga atque andersi delectus nostrum sapiente cupiditate.
                </Desc>
                <SearchBox>
                    <InputHolder>
                    <Input placeholder='KeyWord'/>
                    </InputHolder>
                    <Select>
                        <option value="Category">Category</option>
                        <option value="Education">Education</option>
                        <option value="Fine Art">Fine Art</option>
                        <option value="History">History</option>
                    </Select>
                    <Select>
                        <option value="Writer">Writer</option>
                        <option value="Dc Valerian">Dc Valerian</option>
                        <option value="Willams Daniel">Willams Daniel</option>
                        <option value="Thywill">Thywill </option>
                    </Select>
                    <GlobalButton text='Search' bcc='#EA530D' width='100px' height='40px'/>
                </SearchBox>
                <Links>
                </Links>
              </Wrap>
            </Wrapper>
          </Back>
        </Container>
    </div>
  )
}

export default Hero

const Select = styled.select`
border-right: 1px solid black;

`

const Input = styled.input`
outline: none;
border: none;
`

const InputHolder = styled.div`
border-right: 1px solid black;
`

const Links = styled.div``

const SearchBox = styled.div`
/* background-color: red; */
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content:center;
padding:10px 10px;
border-radius: 5px;
`

const Desc = styled.div`
text-align: center;
margin: 25px 0;
font-size: 17px;
color: white;
`

const Title = styled.div`
font-weight: 700;
font-size: 48px;
text-align: center;
color: white;
`
const Wrap =styled.div`
margin-top: 70px;
/* background-color: purple; */
`
const Back = styled.div`
background-color: rgba(0,0,0,0.8);
width: 100%;
height: 100%;
/* backdrop-filter: blur(2px); */
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
/* background-color: yellow; */
`

const Container = styled.div`
/* background-color: orangered; */
width: 100%;
height: 600px;
display: flex;
align-items: center;
justify-content: center;
background-image: url(${hero});
background-repeat: no-repeat;
/* background-size: auto; */
background-size:100% ;
`