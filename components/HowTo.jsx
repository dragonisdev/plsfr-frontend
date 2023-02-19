import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import banner from "../src/assets/banner.gif"
import { useState } from 'react'
import Use from "../src/assets/Use.png"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  padding-bottom: 4rem;
`;

const Section2 = styled.section`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  padding-top: 7rem;

  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

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

function HowTo() {
  return (
    <Container>
      <Section2>
        <div  className="flex flex-col justify-center max-h-[500px] px-12">
            <img src={Use}></img>
        </div>
        
        <div className=' mx-14'>
          <Title className="font-main text-4xl md:text-6xl font-[700] text-white max-w-[18ch]">
            <GradientText>Easy to use:</GradientText> 
          </Title>
          <div className='my-6'>
            <Subtitle className='text-white text-xl font-main max-w-[40ch]'>
              <ol className='list-decimal'>
                <li className='my-2 ml-5'>Type a keyword, genre or an artist into the Playlist Surfer search engine</li>
                <li className='my-2 ml-5'>Instantly discover thousands of playlists along with their contact information and links </li>
                <li className='my-2 ml-5'>Quick-save the information and create your own curated playlist spreadsheet </li>
              </ol>
          </Subtitle>
          </div>
        </div>
      </Section2>
    </Container>
  )
}

export default HowTo