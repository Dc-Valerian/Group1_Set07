
import React from 'react'
import styled from 'styled-components'
import {MdFavorite,MdVisibility} from "react-icons/md"

interface ICard{
    image:string;
    image2:string,
    text:string;
    label:string;
    view:string;
}


const GlobalCard:React.FC<ICard> = ({image,image2,text,label,view}) => {
  return (
    <div>
        <Container>
            <Image>
                <Pic src={image}/>

                <HoverCard>
                    <Title>
                        Thywill Nwachuckwu
                    </Title>
                    <Box>
                        <Boxes>
                            <Icon1/>
                        </Boxes>
                        <Boxes>
                            <Icon2/>
                        </Boxes>
                    </Box>
                </HoverCard>
            </Image>
            <DownPart>
              <Icon src={image2}/>
                <Name>
                   {text}
                </Name>
                <Label>
                    {label}
                </Label>
                <View>
                    <Icon1/>
                    {view}
                </View>
                <View>
                    <Icon2/>
                    {view}
                </View>
            </DownPart>
        
        </Container>
      
    </div>
  )
}

export default GlobalCard

const Boxes = styled.div`
margin:10px;
`

const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
`

const Title = styled.div`
color: white;
`

const HoverCard = styled.div`
/* display: flex; */
/* background-color: red; */
background: rgb(249,249,249);
background: linear-gradient(0deg, #050505 0%,  rgba(0,0,0,0) 100%);
justify-content: space-around;
display:none;
position: absolute;
bottom: 38px;
width: 100%;
height:70px;
align-items: center;
`

const Icon2 = styled(MdVisibility)`
margin-top: 2px;
`

const Icon1 = styled(MdFavorite)`
margin-top: 2px;
`

const View = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Label = styled.div``

const Name = styled.div`
color: black;
`

const Icon = styled.img``

const DownPart = styled.div`
/* background-color: red; */
display: flex;
align-items: center;
justify-content: space-between;
`

const Pic = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const Image = styled.div`
width: 100%;
height:86%;
cursor: pointer;

:hover ${HoverCard}{
    display: flex;
}
`

const Container = styled.div`
/* background-color: darkorange; */
width: 300px;
height: 270px;
border-radius: 10px;
overflow: hidden;
position: relative;
margin-right: 10px;
margin-bottom: 10px;

`

