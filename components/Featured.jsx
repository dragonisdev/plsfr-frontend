import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 4rem
`;

const Title = styled.h1`
  line-height: 120%;
`;

const Subtitle = styled.h2``;

const GradientText = styled.span`
  color: #ffffff;
  background-image: -webkit-linear-gradient(
    0deg,
    #ffffff 0%,
    #a299ff 43%,
    #ff4ed2 96%
  );
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  
`;


const Section2 = styled.section`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%; 
`

const Videocontainer = styled.div`
`

const Videoframe = styled.iframe`
aspect-ratio: 16 / 9;
top: 0;
left: 0;

height: 500px;
width: 100%
`

const AppButton = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: #fff;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    box-shadow: inset 0 0 20px #d830ae74, 0 0 20px #d830ae2b;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
  }
`;

function Featured() {
  return (
    <Container>
        
        <Title className='text-center font-main text-4xl md:text-5xl font-[700] text-white max-w-[18ch] py-7 px-6'>
            <GradientText>Featured Content</GradientText>
        </Title>
        
        <Videocontainer>
            <Videoframe className='w-[100%] px-12'  src="https://www.youtube.com/embed/kR2ubmupvQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Videoframe>
        </Videocontainer>
        <Link to="/Blog" className='mt-7'>
            <AppButton className="btn btn-5 text-white font-main font-semibold text-xl px-6 py-3 bg-pink-400 hover:bg-pink-300 transition">More</AppButton>
        </Link>
    </Container>
  )
}

export default Featured