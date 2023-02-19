import React from 'react'
import styled from 'styled-components'
import Infinity from "../src/assets/infinitydrops.png"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
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
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
`;

const Reviews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2E2E2E;

  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
 
  max-width: 24rem;
  background-color: #1a202c;
  border: 3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, #a299ff, #ff4ed2);
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem;
`;

const ReviewImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

function Testimonials() {
  return (
    <Container>
      <Title className='text-center font-main text-4xl md:text-5xl font-[700] text-white max-w-[18ch] py-7'>
        <GradientText>What artists say: </GradientText>
      </Title>
      <Reviews  className='px-12'>
        <ReviewBox>
          <ReviewImage src={Infinity} alt='Infinity Drops'/>
          <h1 className='text-white font-main font-semibold text-center'>Infinity Drops</h1>
          <div className='text-white text-center'>
            <p>
              Amazing service I wish I used back in 2019
            </p>
          </div>
        </ReviewBox>
        <ReviewBox>
          <ReviewImage src={Infinity} alt='Infinity Drops'/>
          <h1 className='text-white font-main font-semibold text-center'>Infinity Drops</h1>
          <div className='text-white text-center'>
            <p>
              Amazing service I wish I used back in 2019
            </p>
          </div>
        </ReviewBox>
        <ReviewBox>
          <ReviewImage src={Infinity} alt='Infinity Drops'/>
          <h1 className='text-white font-main font-semibold text-center'>Infinity Drops</h1>
          <div className='text-white text-center'>
            <p>
              Amazing service I wish I used back in 2019
            </p>
          </div>
        </ReviewBox>
        
        {/* Add more reviews here */}
        
      </Reviews>
    </Container>
  )
}

export default Testimonials
