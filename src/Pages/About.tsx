import React from 'react'
import GlobalButton from '../Components/Static/GlobalButton'
import styled from 'styled-components'
import GlobalCard from '../Components/Static/GlobalCard'
import img from "../Assets/card.png"
import img2 from "../Assets/cardimg2.webp"
import img3 from "../Assets/cardimg3.webp"
import img4 from "../Assets/cardimg4.webp"
import cardimg from "../Assets/cardimg.webp"

const About = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TitleHold>
          <Hold>
          <Title>Popular books in Bookpress</Title>
            <SubText>Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas.</SubText>
          </Hold>
          <GlobalButton width='130px' text='Browse all Books' bcc='#0275D8' height='40px'/>
          </TitleHold>

          <CardHolder>
            <GlobalCard image={img} image2={cardimg} text={'Valerian Pedro'} label={'Pro'} view={'203'}/>
            <GlobalCard image={img2} image2={cardimg} text={'Valerian Pedro'} label={'Pro'} view={'203'}/>
            <GlobalCard image={img3} image2={cardimg} text={'Valerian Pedro'} label={'Pro'} view={'203'}/>
            <GlobalCard image={img4} image2={cardimg} text={'Valerian Pedro'} label={'Pro'} view={'203'}/>
            <GlobalCard image={img3} image2={cardimg} text={'Valerian Pedro'} label={'Pro'} view={'203'}/>
            <GlobalCard image={img2} image2={cardimg} text={'Valerian Pedro'} label={'Pro'} view={'203'}/>
            {/* <GlobalCard/>
            <GlobalCard/> */}
          </CardHolder>
        </Wrapper>
      </Container>
    </div>
  )
}

export default About



const CardHolder = styled.div`
/* background-color: pink; */
width: 90%;
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
`
  

const SubText = styled.div`
width: 400px;
margin-top: 20px;
color: grey
`

const Title = styled.div`
font-weight: 700;
font-size: 40px;
`

const Hold = styled.div``

const TitleHold = styled.div`
/* background-color: yellow; */
display: flex;
align-items: center;
justify-content: space-between;
`

const Wrapper = styled.div`
width: 90%;
height: 100%;
/* background-color: red; */
`
  

const Container = styled.div`
background-color: whitesmoke;
min-height: 600px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`