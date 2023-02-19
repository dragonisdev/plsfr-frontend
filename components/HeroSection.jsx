import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useState } from 'react'
import Use from "../src/assets/Use.png"
import banner from "../src/assets/banner.gif"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
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
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  
  
`


const Section = styled.section`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  
  padding-top: 7rem;
  
  overflow: hidden;
  .spline {
    max-width: 625px;
    max-height: 500px;
  }

  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
    justify-content: center;

    .spline {
      margin-top: 4rem;
      max-width: 625px;
      max-height: 500px;
    }
  }
  @media screen and (max-width: 500px) {
    .spline {
      max-width: 400px;
      max-height: 320px;
    }
    
  }
`;

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

const ReviewButton = styled.div`
  color: #fff;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;

  svg {
    left: 0;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;

    rect {
      fill: none;
      stroke: #d830ad;
      stroke-width: 3;
      stroke-dasharray: 422, 0;
      transition: all 0.35s linear;
    }
  }

  &:hover {
    background: rgba(#d830ad, 0);

    svg {
      rect {
        stroke-width: 5;
        stroke-dasharray: 15, 310;
        stroke-dashoffset: 48;
        transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`;

function HeroSection() {
  return (
    <Container>
      <Section className="bg-main">
      <div className="flex flex-col space-y-6 justify-center max-h-[500px] px-12 ">
        <Title className="font-main text-5xl md:text-6xl font-[700] text-white max-w-[18ch]">
          <GradientText>Streamline</GradientText> Your Playlist Discovery With
          AI
        </Title>
        <Subtitle className="text-white font-main text-xl font-semibold max-w-[40ch]">
          Give your music the spotlight it deserves. Quickly match thousands of
          Spotify playlists to your music{" "}
          <span className="text-pink-200">for FREE</span>.{" "}
        </Subtitle>
        <div className="flex flex-col gap-4 md:flex-row md:space-x-6 mb-4">
          <Link to="/Search">
            <AppButton className="btn btn-5 text-white font-main font-semibold text-xl px-6 py-3 bg-pink-400 hover:bg-pink-300 transition">
              Open App
            </AppButton>
          </Link>

          <Link href="/">
            <ReviewButton className="btn btn-1 text-white font-main font-semibold text-xl px-6 py-3">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              See Our Reviews
            </ReviewButton>
          </Link>
        </div>
      </div>
      <div className="w-[625px] h-[500px] m-0">
        <Spline
          className="spline m-0"
          scene="https://prod.spline.design/ZbTUZ-DriUByAi6A/scene.splinecode"
        />
      </div>
      
      
    </Section>
    
    
   
    
    
    </Container>
  );
}

export default HeroSection;
